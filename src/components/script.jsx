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

import * as THREE from "three";

// ── CONSTANTS & METRIC CONVERSIONS ──
const NEAR = 0.01;
const FAR = 350;

// ── 1. BASE64 & SVG PATTERN GENERATORS (ASPECT-RATIO PRESERVED) ──

async function fetchBase64(url) {
  const response = await fetch(url, { mode: "cors" });
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

async function generateHerringboneDataURL(
  tex1Url,
  tex2Url,
  plankW_mm = 101.6,
  plankL_mm = 457.2,
) {
  const [base64_1, base64_2] = await Promise.all([
    fetchBase64(tex1Url),
    fetchBase64(tex2Url),
  ]);
  // const size = 1024;
  const size = 914.4;
  const nx = 4;
  const l = size / (nx * Math.SQRT2);
  // Hardcoded values replaced with dynamic function parameters
  const w = l / (plankL_mm / plankW_mm);
  const groutWidth = 0;
  const groutColor = "#020202";
  const g = groutWidth / 2;

  const boundI = Math.ceil((size / w) * 2);
  const boundJ = Math.ceil((size / l) * 2);

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
    <defs>
      <pattern id="tex1" patternUnits="userSpaceOnUse" width="${w}" height="${l}">
        <image href="${base64_1}" x="0" y="0" width="${w}" height="${l}" preserveAspectRatio="xMidYMid slice"/>
      </pattern>
      <pattern id="tex2" patternUnits="userSpaceOnUse" width="${w}" height="${l}">
        <image href="${base64_2}" x="0" y="0" width="${w}" height="${l}" preserveAspectRatio="xMidYMid slice"/>
      </pattern>
    </defs>
    <rect width="${size}" height="${size}" fill="${groutColor}"/>
    <g transform="translate(${size / 2}, ${size / 2}) rotate(45)">`;

  for (let i = -boundI; i <= boundI; i++) {
    for (let j = -boundJ; j <= boundJ; j++) {
      const x = i * w + j * l;
      const y = i * w - j * l;
      const fillV = Math.abs(i + j) % 2 === 0 ? "url(#tex1)" : "url(#tex2)";
      const fillH = Math.abs(i - j) % 2 === 0 ? "url(#tex2)" : "url(#tex1)";

      svg += `<rect x="${x}" y="${y}" width="${w}" height="${l}" fill="${fillV}"/>`;
      svg += `<rect x="0" y="0" width="${w}" height="${l}" fill="${fillH}" transform="translate(${x + w}, ${y + w}) rotate(-90)"/>`;
    }
  }
  svg += `</g></svg>`;

  return new Promise((resolve, reject) => {
    const img = new Image();
    const svgBlob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);

      // ✅ FIX: Resolve an Object matching what the .then() block expects
      resolve({
        dataUrl: canvas.toDataURL("image/jpeg", 1.0),
        blockWidthMeters: 1.0,
        blockHeightMeters: 1.0,
      });
    };
    img.onerror = reject;
    img.src = url;
  });
}

// Apni Three.js (script.jsx) me is function ko replace karein:
async function generateStaggeredDataURL(
  texUrl,
  staggerRatio,
  plankW_mm = 152.4,
  plankL_mm_Ignored = 914.4,
) {
  const base64 = await fetchBase64(texUrl);
  // const size = 1024;
  const size = 914.4;

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      // ✅ MAGIC FIX: Dynamic Aspect Ratio Calculation
      // Image ka asli size check karke length decide hogi, taaki stretch na ho!
      let plankW = plankW_mm;
      let plankL = plankL_mm_Ignored;

      if (img.width > img.height) {
        // Agar image chaudi (horizontal) hai
        plankL = plankW_mm;
        plankW = plankL * (img.width / img.height);
      } else {
        // Agar image lambi (vertical normal plank) hai
        plankL = plankW * (img.height / img.width);
      }

      const cols = Math.ceil(size / plankW) + 1;
      const rows = Math.ceil(size / plankL) + 2;

      let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
        <defs>
          <pattern id="tex" patternUnits="userSpaceOnUse" width="${plankW}" height="${plankL}">
            <image href="${base64}" x="0" y="0" width="${plankW}" height="${plankL}" preserveAspectRatio="none"/>
          </pattern>
        </defs>`;

      for (let i = 0; i < cols; i++) {
        let x = i * plankW;
        let shiftStep = Math.round(1 / staggerRatio);
        let yOffset = -(plankL * staggerRatio * (i % shiftStep));

        for (let j = -1; j <= rows; j++) {
          let y = j * plankL + yOffset;
          // + 0.5 for micro-overlap (Grout lines hatane ke liye)
          svg += `<rect x="${x}" y="${y}" width="${plankW + 0.5}" height="${plankL + 0.5}" fill="url(#tex)"/>`;
          // svg += `<rect x="${x}" y="${y}" width="${plankW}" height="${plankL}" fill="url(#tex)"/>`;
        }
      }
      svg += `</svg>`;

      const svgBlob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(svgBlob);
      const outImg = new Image();

      outImg.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(outImg, 0, 0);
        URL.revokeObjectURL(url);

        resolve({
          dataUrl: canvas.toDataURL("image/jpeg", 1.0),
          blockWidthMeters: 1.0,
          blockHeightMeters: 1.0,
        });
      };
      outImg.onerror = reject;
      outImg.src = url;
    };
    img.onerror = reject;
    img.src = base64;
  });
}

async function generateCheckerboardDataURL(
  tex1Url,
  tex2Url,
  singleTileMeters = 0.4572,
) {
  const [base64_1, base64_2] = await Promise.all([
    fetchBase64(tex1Url),
    fetchBase64(tex2Url),
  ]);
  // const size = 1024;
  const size = 914.4;
  const tileSize = size / 4;
  const groutColor = "#020202";

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
    <defs>
      <pattern id="ctex1" patternUnits="userSpaceOnUse" width="${tileSize}" height="${tileSize}">
        <image href="${base64_1}" x="0" y="0" width="${tileSize}" height="${tileSize}" preserveAspectRatio="xMidYMid slice"/>
      </pattern>
      <pattern id="ctex2" patternUnits="userSpaceOnUse" width="${tileSize}" height="${tileSize}">
        <image href="${base64_2}" x="0" y="0" width="${tileSize}" height="${tileSize}" preserveAspectRatio="xMidYMid slice"/>
      </pattern>
    </defs>
    <rect width="${size}" height="${size}" fill="${groutColor}"/>`;

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const x = i * tileSize;
      const y = j * tileSize;
      const fillPattern = (i + j) % 2 === 0 ? "url(#ctex1)" : "url(#ctex2)";
      svg += `<rect x="${x}" y="${y}" width="${tileSize}" height="${tileSize}" fill="${fillPattern}"/>`;
    }
  }
  svg += `</svg>`;

  return new Promise((resolve, reject) => {
    const img = new Image();
    const svgBlob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);

      // ✅ FIX: Resolve Object & pass accurate block dimensions based on 4x4 grid
      resolve({
        dataUrl: canvas.toDataURL("image/jpeg", 1.0),
        blockWidthMeters: singleTileMeters * 4,
        blockHeightMeters: singleTileMeters * 4,
      });
    };
    img.onerror = reject;
    img.src = url;
  });
}
// ── 2. CAMERA CALIBRATION & 3D RAY-PLANE INTERSECTION HELPERS ──

function configureCameraFromIntrinsics(
  camera,
  cameraData,
  inputData,
  containerWidth,
  containerHeight,
) {
  if (!cameraData || !inputData) return;

  const sourceWidth = inputData.width;
  const sourceHeight = inputData.height;

  const scale = Math.max(
    containerWidth / sourceWidth,
    containerHeight / sourceHeight,
  );
  const renderedWidth = sourceWidth * scale;
  const renderedHeight = sourceHeight * scale;
  const cropX = (renderedWidth - containerWidth) / 2;
  const cropY = (renderedHeight - containerHeight) / 2;

  const fx = cameraData.fx * scale;
  const fy = cameraData.fy * scale;
  const cx = cameraData.cx * scale - cropX;
  const cy = cameraData.cy * scale - cropY;

  const left = (-cx / fx) * NEAR;
  const right = ((containerWidth - cx) / fx) * NEAR;
  const top = (cy / fy) * NEAR;
  const bottom = (-(containerHeight - cy) / fy) * NEAR;

  camera.position.set(0, 0, 0);
  camera.quaternion.identity();
  camera.scale.set(1, 1, 1);
  camera.near = NEAR;
  camera.far = FAR;
  camera.projectionMatrix.makePerspective(left, right, top, bottom, NEAR, FAR);
  camera.projectionMatrixInverse.copy(camera.projectionMatrix).invert();
  camera.updateMatrixWorld(true);
}

function intersectImagePixelWithFloorPlane(
  u,
  v,
  cameraData,
  cvNormal,
  planeDistance,
  maxDist = Infinity,
) {
  const rayCv = new THREE.Vector3(
    (u - cameraData.cx) / cameraData.fx,
    (v - cameraData.cy) / cameraData.fy,
    1,
  );

  const denom = cvNormal.dot(rayCv);
  if (Math.abs(denom) < 1e-7) return null;

  const t = -planeDistance / denom;
  if (!Number.isFinite(t) || t <= 0 || t > maxDist) return null;

  const ptCv = rayCv.multiplyScalar(t);
  return new THREE.Vector3(ptCv.x, -ptCv.y, -ptCv.z);
}

function buildCalibratedFloorGeometry(prediction) {
  const cameraData = prediction.camera;
  const floorData = prediction.floor;
  const plane = floorData?.plane;

  if (!cameraData || !plane) {
    throw new Error("Missing calibrated camera/floor data.");
  }

  const cvNormal = new THREE.Vector3(...plane.normal).normalize();
  const planeDistance = Number.isFinite(plane.distance)
    ? plane.distance
    : cameraData.height_meters;

  const threePlaneNormal = new THREE.Vector3(
    cvNormal.x,
    -cvNormal.y,
    -cvNormal.z,
  ).normalize();

  let widthAxis = new THREE.Vector3(1, 0, 0).projectOnPlane(threePlaneNormal);
  if (widthAxis.lengthSq() < 1e-8) {
    widthAxis = new THREE.Vector3(0, 0, -1).projectOnPlane(threePlaneNormal);
  }
  widthAxis.normalize();

  const depthAxis = new THREE.Vector3()
    .crossVectors(threePlaneNormal, widthAxis)
    .normalize();

  let planeOrigin = intersectImagePixelWithFloorPlane(
    cameraData.cx,
    cameraData.cy,
    cameraData,
    cvNormal,
    planeDistance,
  );
  if (!planeOrigin) {
    planeOrigin = threePlaneNormal.clone().multiplyScalar(-planeDistance);
  }

  const minWidth = -200;
  const maxWidth = 200;
  const minDepth = -50;
  const maxDepth = 250;

  const floorWidthMeters = maxWidth - minWidth;
  const floorDepthMeters = maxDepth - minDepth;

  const makePoint = (w, d) =>
    planeOrigin
      .clone()
      .addScaledVector(widthAxis, w)
      .addScaledVector(depthAxis, d);

  const geometryVertices = [
    makePoint(minWidth, minDepth),
    makePoint(maxWidth, minDepth),
    makePoint(maxWidth, maxDepth),
    makePoint(minWidth, maxDepth),
  ];

  const positions = geometryVertices.flatMap((p) => [p.x, p.y, p.z]);
  const normals = geometryVertices.flatMap(() => [
    threePlaneNormal.x,
    threePlaneNormal.y,
    threePlaneNormal.z,
  ]);

  const uvs = [
    minWidth,
    minDepth,
    maxWidth,
    minDepth,
    maxWidth,
    maxDepth,
    minWidth,
    maxDepth,
  ];

  const geometry = new THREE.BufferGeometry();
  geometry.setIndex([0, 1, 2, 0, 2, 3]);
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3),
  );
  geometry.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));

  return { geometry, floorWidthMeters, floorDepthMeters };
}

// ── 3. MAIN EXPORTABLE VISUALIZER FUNCTION ──

export const initVisualizer = (container, predictionData = null) => {
  if (!container) return null;

  try {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      NEAR,
      FAR,
    );

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
      powerPreference: "high-performance",
    });

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    const ambient = new THREE.HemisphereLight(0xffffff, 0xb7ad9f, 1.55);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 0.5);
    keyLight.position.set(-3.5, 6, 2.5);
    scene.add(keyLight);

    const loader = new THREE.TextureLoader();

    let floorGeometry;
    let floorWidthMeters = 8.0;

    const prediction =
      predictionData?.runpod?.output?.prediction ||
      predictionData?.output?.prediction ||
      predictionData;

    const inputData = prediction?.images?.input || prediction?.input;

    if (prediction?.camera && prediction?.floor) {
      configureCameraFromIntrinsics(
        camera,
        prediction.camera,
        inputData,
        container.clientWidth,
        container.clientHeight,
      );
      const calibrated = buildCalibratedFloorGeometry(prediction);
      floorGeometry = calibrated.geometry;
      floorWidthMeters = calibrated.floorWidthMeters;
    } else {
      floorGeometry = new THREE.PlaneGeometry(8000, 8000);
      camera.position.set(0, 0, 10);
    }

    const floorMaterial = new THREE.MeshPhysicalMaterial({
      side: THREE.DoubleSide,
      transparent: true,
      roughness: 0.6,
      metalness: 0.0,
      clearcoat: 0.1,
      reflectivity: 0.5,
    });

    const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
    floorMesh.frustumCulled = false;

    if (!prediction?.camera) {
      floorMesh.rotation.x = -Math.PI / 2.15;
      floorMesh.position.y = -32;
      floorMesh.position.z = -5;
    }

    scene.add(floorMesh);

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container || container.clientWidth === 0) return;
      if (prediction?.camera) {
        configureCameraFromIntrinsics(
          camera,
          prediction.camera,
          inputData,
          container.clientWidth,
          container.clientHeight,
        );
      } else {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
      }
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.render(scene, camera);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    // ── TEXTURE MAPPER METHODS (WITH REAL-WORLD PERSPECTIVE MULTIPLIERS) ──

    // 🎯 1. Solid / Standard Single Texture Mapper (Fixed Plank & Tile Scaling)
    const updateTexture = (
      textureUrl,
      angleInDegrees = 0,
      tileSizeMeters = 0.4572,
    ) => {
      return new Promise((resolve) => {
        loader.load(
          textureUrl,
          (tex) => {
            tex.colorSpace = THREE.SRGBColorSpace;
            tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
            tex.anisotropy = renderer.capabilities.getMaxAnisotropy();

            const imgAspect =
              tex.image && tex.image.width && tex.image.height
                ? tex.image.width / tex.image.height
                : 1.0;

            let realWidthMeters = tileSizeMeters;
            let realHeightMeters = tileSizeMeters;

            if (imgAspect > 1.0) {
              realWidthMeters = tileSizeMeters * imgAspect;
              realHeightMeters = tileSizeMeters;
            } else if (imgAspect < 1.0) {
              realWidthMeters = tileSizeMeters;
              realHeightMeters = tileSizeMeters / imgAspect;
            }

            // Visual multiplier (2.5x expansion) for realistic room depth scaling
            // const visualScale = 2.5;
            const visualScale = 1;
            const repeatX = prediction?.camera
              ? 1 / (realWidthMeters * visualScale)
              : 12;
            const repeatY = prediction?.camera
              ? 1 / (realHeightMeters * visualScale)
              : 12;

            tex.repeat.set(repeatX, repeatY);
            tex.center.set(0.5, 0.5);
            tex.rotation = (angleInDegrees * Math.PI) / 180;

            floorMaterial.map = tex;
            floorMaterial.needsUpdate = true;
            renderer.render(scene, camera);
            resolve(true);
          },
          undefined,
          () => resolve(false),
        );
      });
    };

    // 🎯 2. Accurate Herringbone Mapper (101.6mm x 457.2mm)
    const updateHerringboneTexture = (
      tex1Url,
      tex2Url,
      angleInDegrees = 0,
      plankW_mm = 101.6,
      plankL_mm = 457.2,
    ) => {
      return generateHerringboneDataURL(tex1Url, tex2Url, plankW_mm, plankL_mm)
        .then(
          ({ dataUrl, blockWidthMeters, blockHeightMeters }) =>
            new Promise((resolve) => {
              loader.load(
                dataUrl,
                (tex) => {
                  tex.colorSpace = THREE.SRGBColorSpace;
                  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
                  tex.anisotropy = renderer.capabilities.getMaxAnisotropy();

                  // Visual multiplier (3.2x expansion) fixes tiny chevron bug
                  // const visualScale = 3.2;
                  const visualScale = 1;
                  const repeatX = prediction?.camera
                    ? 1 / (blockWidthMeters * visualScale)
                    : 10;
                  const repeatY = prediction?.camera
                    ? 1 / (blockHeightMeters * visualScale)
                    : 10;

                  tex.repeat.set(repeatX, repeatY);
                  tex.center.set(0.5, 0.5);
                  tex.rotation = (angleInDegrees * Math.PI) / 180;

                  floorMaterial.map = tex;
                  floorMaterial.needsUpdate = true;
                  renderer.render(scene, camera);
                  resolve(true);
                },
                undefined,
                () => resolve(false),
              );
            }),
        )
        .catch(() => false);
    };

    // 🎯 3. Accurate Staggered Planks Mapper (152.4mm x 914.4mm)
    const updateStaggeredTexture = (
      texUrl,
      staggerRatio = 0.333,
      angleInDegrees = 0,
      plankW_mm = 152.4,
      plankL_mm = 914.4,
    ) => {
      return generateStaggeredDataURL(
        texUrl,
        staggerRatio,
        plankW_mm,
        plankL_mm,
      )
        .then(
          ({ dataUrl, blockWidthMeters, blockHeightMeters }) =>
            new Promise((resolve) => {
              loader.load(
                dataUrl,
                (tex) => {
                  tex.colorSpace = THREE.SRGBColorSpace;
                  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
                  tex.anisotropy = renderer.capabilities.getMaxAnisotropy();

                  // Visual multiplier (2.8x expansion) prevents vertical plank squeezing
                  // const visualScale = 2.8;
                  const visualScale = 1;
                  const repeatX = prediction?.camera
                    ? 1 / (blockWidthMeters * visualScale)
                    : 12;
                  const repeatY = prediction?.camera
                    ? 1 / (blockHeightMeters * visualScale)
                    : 12;

                  tex.repeat.set(repeatX, repeatY);
                  tex.center.set(0.5, 0.5);
                  tex.rotation = (angleInDegrees * Math.PI) / 180;

                  floorMaterial.map = tex;
                  floorMaterial.needsUpdate = true;
                  renderer.render(scene, camera);
                  resolve(true);
                },
                undefined,
                () => resolve(false),
              );
            }),
        )
        .catch(() => false);
    };

    // 🎯 4. Monza Checkerboard (457.2mm / 18" Tiles)
    const updateCheckerboardTexture = (
      tex1Url,
      tex2Url,
      angleInDegrees = 0,
      singleTileMeters = 0.4572,
    ) => {
      return generateCheckerboardDataURL(tex1Url, tex2Url, singleTileMeters)
        .then(
          ({ dataUrl, blockWidthMeters, blockHeightMeters }) =>
            new Promise((resolve) => {
              loader.load(
                dataUrl,
                (tex) => {
                  tex.colorSpace = THREE.SRGBColorSpace;
                  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
                  tex.anisotropy = renderer.capabilities.getMaxAnisotropy();

                  // Visual multiplier (2.5x expansion) for 18" tiles
                  // const visualScale = 2.5;
                  const visualScale = 1;
                  const repeatX = prediction?.camera
                    ? 1 / (blockWidthMeters * visualScale)
                    : 8;
                  const repeatY = prediction?.camera
                    ? 1 / (blockHeightMeters * visualScale)
                    : 8;

                  tex.repeat.set(repeatX, repeatY);
                  tex.center.set(0.5, 0.5);
                  tex.rotation = (angleInDegrees * Math.PI) / 180;

                  floorMaterial.map = tex;
                  floorMaterial.needsUpdate = true;
                  renderer.render(scene, camera);
                  resolve(true);
                },
                undefined,
                () => resolve(false),
              );
            }),
        )
        .catch(() => false);
    };

    // 🎯 5. Monza Solid Tile (457.2mm Single Tile)
    const updateMonzaSolidTexture = (
      textureUrl,
      angleInDegrees = 0,
      tileSizeMeters = 0.4572,
    ) => {
      return updateTexture(textureUrl, angleInDegrees, tileSizeMeters);
    };

    return {
      cleanup: () => {
        cancelAnimationFrame(animationFrameId);
        resizeObserver.disconnect();
        if (
          container &&
          renderer.domElement &&
          container.contains(renderer.domElement)
        ) {
          container.removeChild(renderer.domElement);
        }
        renderer.dispose();
        floorGeometry.dispose();
        floorMaterial.dispose();
      },
      updateTexture,
      updateHerringboneTexture,
      updateStaggeredTexture,
      updateCheckerboardTexture,
      updateMonzaSolidTexture,
    };
  } catch (error) {
    console.error("Three.js Init Error:", error);
    return null;
  }
};
