// import * as THREE from 'three';

// export const initVisualizer = (container) => {
//   if (!container) return null;

//   try {
//     const scene = new THREE.Scene();

//     const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 10000);

//     const renderer = new THREE.WebGLRenderer({ 
//       antialias: true, 
//       alpha: true,
//       preserveDrawingBuffer: true 
//     });

//     renderer.setSize(container.clientWidth, container.clientHeight);
//     renderer.setPixelRatio(window.devicePixelRatio);
//     container.appendChild(renderer.domElement);

//     const ambient = new THREE.AmbientLight(0xffffff, 1.2);
//     scene.add(ambient);

//     const loader = new THREE.TextureLoader();

//     const floorGeometry = new THREE.PlaneGeometry(8000, 8000);
//     const floorMaterial = new THREE.MeshStandardMaterial({
//       side: THREE.DoubleSide,
//       transparent: true,
//       roughness: 0.85,
//       metalness: 0.0
//     });

//     const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
//     floorMesh.rotation.x = -Math.PI / 2.15; 
//     floorMesh.position.y = -32;
//     floorMesh.position.z = -5;
//     scene.add(floorMesh);

//     camera.position.set(0, 0, 10);

//     let animationFrameId;
//     const animate = () => {
//       animationFrameId = requestAnimationFrame(animate);
//       renderer.render(scene, camera);
//     };
//     animate();

//     const handleResize = () => {
//       if (!container || container.clientWidth === 0) return;
//       camera.aspect = container.clientWidth / container.clientHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(container.clientWidth, container.clientHeight);
//       // Explicitly render immediately after a resize clears the buffer
//       renderer.render(scene, camera);
//     };

//     const resizeObserver = new ResizeObserver(() => {
//       handleResize();
//     });
//     resizeObserver.observe(container);

//     // ✅ THE FIX: Return a Promise so ARVisualization.jsx can definitively wait for the texture
//     const updateTexture = (textureUrl, angleInDegrees = 0) => {
//       return new Promise((resolve) => {
//         loader.load(
//           textureUrl, 
//           (tex) => {
//             tex.colorSpace = THREE.SRGBColorSpace;
//             tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
//             tex.repeat.set(240, 240); 

//             tex.center.set(0.5, 0.5);
//             tex.rotation = (angleInDegrees * Math.PI) / 180;
//             floorMaterial.map = tex;
//             floorMaterial.needsUpdate = true;

//             // Force an explicit render frame immediately to guarantee it is drawn
//             renderer.render(scene, camera);

//             // Tell ARVisualization.jsx the floor is officially ready!
//             resolve(true); 
//           }, 
//           undefined, 
//           (err) => {
//             console.error("Texture load failed", err);
//             resolve(false); // Fails gracefully instead of freezing
//           }
//         );
//       });
//     };

//     return {
//       cleanup: () => {
//         cancelAnimationFrame(animationFrameId);
//         resizeObserver.disconnect();

//         if (container && renderer.domElement && container.contains(renderer.domElement)) {
//           container.removeChild(renderer.domElement);
//         }
//         renderer.dispose();
//         floorGeometry.dispose();
//         floorMaterial.dispose();
//       },
//       updateTexture
//     };
//   } catch (error) {
//     console.error("Three.js Init Error:", error);
//     return null;
//   }
// };

import * as THREE from 'three';

// ── Image URL ko base64 mein convert karta hai (SVG <image> tag ke andar embed karne ke liye) ──
async function fetchBase64(url) {
  const response = await fetch(url, { mode: 'cors' });
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

// ── 2 tiles ko herringbone weave mein bake karke ek seamless SVG data URL return karta hai ──
async function generateHerringboneDataURL(tex1Url, tex2Url) {
  const [base64_1, base64_2] = await Promise.all([fetchBase64(tex1Url), fetchBase64(tex2Url)]);

  const size = 1024;
  const nx = 4;
  const l = size / (nx * Math.SQRT2);

  const PLANK_WIDTH_MM = 101.6;
  const PLANK_LENGTH_MM = 457.2;
  const w = l / (PLANK_LENGTH_MM / PLANK_WIDTH_MM);

  const groutWidth = 0;   
  const groutColor = '#020202';
  const g = groutWidth / 2;

  const boundI = Math.ceil((size / w) * 2);
  const boundJ = Math.ceil((size / l) * 2);

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
    <defs>
      <pattern id="tex1" patternUnits="userSpaceOnUse" width="${w}" height="${l}">
        <image href="${base64_1}" x="0" y="0" width="${w}" height="${l}" preserveAspectRatio="none"/>
      </pattern>
      <pattern id="tex2" patternUnits="userSpaceOnUse" width="${w}" height="${l}">
        <image href="${base64_2}" x="0" y="0" width="${w}" height="${l}" preserveAspectRatio="none"/>
      </pattern>
    </defs>
    <rect width="${size}" height="${size}" fill="${groutColor}"/>
    <g transform="translate(${size / 2}, ${size / 2}) rotate(45)">`;

  for (let i = -boundI; i <= boundI; i++) {
    for (let j = -boundJ; j <= boundJ; j++) {
      const x = (i * w) + (j * l);
      const y = (i * w) - (j * l);

      const fillV = (Math.abs(i + j) % 2 === 0) ? 'url(#tex1)' : 'url(#tex2)';
      const fillH = (Math.abs(i - j) % 2 === 0) ? 'url(#tex2)' : 'url(#tex1)';

      svg += `<rect x="${x + g}" y="${y + g}" width="${w - groutWidth}" height="${l - groutWidth}" fill="${fillV}"/>`;
      svg += `<rect x="${g}" y="${g}" width="${w - groutWidth}" height="${l - groutWidth}" fill="${fillH}" transform="translate(${x + w}, ${y + w}) rotate(-90)"/>`;
    }
  }
  svg += `</g></svg>`;

  return new Promise((resolve, reject) => {
    const img = new Image();
    const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      
      // ✨ HD FIX 1: Canvas ki drawing quality ko highest par set karna
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);
      
      // ✨ HD FIX 2: Quality parameter ko 0.95 se 1.0 (100% Quality) karna
      resolve(canvas.toDataURL('image/jpeg', 1.0));
    };
    img.onerror = reject;
    img.src = url;
  });
}

// ── NEW: Advanced SVG-Based Staggered Plank Generator ──
async function generateStaggeredDataURL(texUrl, staggerRatio) {
  const base64 = await fetchBase64(texUrl);
  const size = 1024; // Three.js prefers square 1024x1024 textures

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      // Real-world physical dimensions of the plank
      const plankW = 152.4;
      const plankL = 914.4;

      const cols = Math.ceil(size / plankW) + 1;
      const rows = Math.ceil(size / plankL) + 2;

      const groutWidth = 0;   
      const g = groutWidth / 2;
      const groutColor = "#020202";

      let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
        <defs>
          <pattern id="tex" patternUnits="userSpaceOnUse" width="${plankW}" height="${plankL}">
            <image href="${base64}" x="0" y="0" width="${plankW}" height="${plankL}" preserveAspectRatio="none"/>
          </pattern>
        </defs>
        <rect width="${size}" height="${size}" fill="${groutColor}"/>`;

      for (let i = 0; i < cols; i++) {
        let x = i * plankW;
        
        // Dynamic Stagger Math (handles 1/3 or 1/2 stagger seamlessly)
        let shiftStep = Math.round(1 / staggerRatio);
        let yOffset = -(plankL * staggerRatio * (i % shiftStep));

        for (let j = -1; j <= rows; j++) {
          let y = (j * plankL) + yOffset;
          svg += `<rect x="${x + g}" y="${y + g}" width="${plankW - groutWidth}" height="${plankL - groutWidth}" fill="url(#tex)"/>`;
        }
      }
      svg += `</svg>`;

      // Convert SVG to Image for Three.js
      const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);
      const outImg = new Image();
      
      outImg.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        
        // ✨ HD FIX 3: Canvas ki drawing quality ko highest par set karna
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        
        ctx.drawImage(outImg, 0, 0);
        URL.revokeObjectURL(url);
        
        // ✨ HD FIX 4: Quality parameter ko 0.95 se 1.0 (100% Quality) karna
        resolve(canvas.toDataURL('image/jpeg', 1.0));
      };
      outImg.onerror = reject;
      outImg.src = url;
    };
    img.onerror = reject;
    img.src = base64;
  });
}

export const initVisualizer = (container) => {
  if (!container) return null;

  try {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 10000);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true
    });

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambient);

    const loader = new THREE.TextureLoader();

    const floorGeometry = new THREE.PlaneGeometry(8000, 8000);
    const floorMaterial = new THREE.MeshStandardMaterial({
      side: THREE.DoubleSide,
      transparent: true,
      roughness: 0.85,
      metalness: 0.0
    });

    const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
    floorMesh.rotation.x = -Math.PI / 2.15;
    floorMesh.position.y = -32;
    floorMesh.position.z = -5;
    scene.add(floorMesh);

    camera.position.set(0, 0, 10);

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container || container.clientWidth === 0) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.render(scene, camera);
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    const updateTexture = (textureUrl, angleInDegrees = 0) => {
      return new Promise((resolve) => {
        loader.load(
          textureUrl,
          (tex) => {
            tex.colorSpace = THREE.SRGBColorSpace;
            tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
            
            // ✨ HD FIX 5: Anisotropic filtering (Farsh ko door tak sharp dikhata hai)
            tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
            
            tex.repeat.set(240, 240);
            tex.center.set(0.5, 0.5);
            tex.rotation = (angleInDegrees * Math.PI) / 180;
            floorMaterial.map = tex;
            floorMaterial.needsUpdate = true;

            renderer.render(scene, camera);
            resolve(true);
          },
          undefined,
          (err) => {
            console.error("Texture load failed", err);
            resolve(false);
          }
        );
      });
    };

    // ✅ NEW: 2 tiles ko herringbone weave mein bake karke floor pe apply karta hai
    const updateHerringboneTexture = (tex1Url, tex2Url, angleInDegrees = 0) => {
      return generateHerringboneDataURL(tex1Url, tex2Url)
        .then((dataUrl) => new Promise((resolve) => {
          loader.load(
            dataUrl,
            (tex) => {
              tex.colorSpace = THREE.SRGBColorSpace;
              tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
              
              // ✨ HD FIX 6: Anisotropic filtering for Herringbone
              tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
              
              tex.repeat.set(80, 80)
              tex.center.set(0.5, 0.5);
              tex.rotation = (angleInDegrees * Math.PI) / 180;
              floorMaterial.map = tex;
              floorMaterial.needsUpdate = true;
              renderer.render(scene, camera);
              resolve(true);
            },
            undefined,
            (err) => {
              console.error('Herringbone texture load failed', err);
              resolve(false);
            }
          );
        }))
        .catch((err) => {
          console.error('Herringbone generation failed', err);
          return false;
        });
    };
    
    // ── NEW: Apply Staggered SVG to Floor ──
    const updateStaggeredTexture = (texUrl, staggerRatio, angleInDegrees = 0) => {
      return generateStaggeredDataURL(texUrl, staggerRatio)
        .then((dataUrl) => new Promise((resolve) => {
          loader.load(
            dataUrl,
            (tex) => {
              tex.colorSpace = THREE.SRGBColorSpace;
              tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
              
              // ✨ HD FIX 7: Anisotropic filtering for Staggered Planks
              tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
              
              // Perfect 1024x1024 sheet banne ke baad humein bas square repeating karni hai
              // Note: Agar floor par tile zyada bade lag rahe hain, to is number ko badha kar (30, 30) kar de.
              // Agar chote lag rahe hain, to ghata kar (10, 10) kar de.
              tex.repeat.set(120, 120); 
              
              tex.center.set(0.5, 0.5);
              tex.rotation = (angleInDegrees * Math.PI) / 180;
              floorMaterial.map = tex;
              floorMaterial.needsUpdate = true;
              renderer.render(scene, camera);
              resolve(true);
            },
            undefined,
            (err) => {
              console.error('Staggered texture load failed', err);
              resolve(false);
            }
          );
        }))
        .catch((err) => {
          console.error('Staggered generation failed', err);
          return false;
        });
    };

    return {
      cleanup: () => {
        cancelAnimationFrame(animationFrameId);
        resizeObserver.disconnect();

        if (container && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        renderer.dispose();
        floorGeometry.dispose();
        floorMaterial.dispose();
      },
      updateTexture,
      updateHerringboneTexture,
      updateStaggeredTexture
    };
  } catch (error) {
    console.error("Three.js Init Error:", error);
    return null;
  }
};
