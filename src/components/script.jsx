import * as THREE from 'three';

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
      // ✅ FIX 1: Explicitly render immediately after a resize clears the buffer
      renderer.render(scene, camera);
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    // ✅ FIX 2: Return a Promise so React can definitively wait for the texture
    const updateTexture = (textureUrl, angleInDegrees = 0) => {
      return new Promise((resolve) => {
        loader.load(textureUrl, (tex) => {
          tex.colorSpace = THREE.SRGBColorSpace;
          tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
          tex.repeat.set(240, 240); 
          
          tex.center.set(0.5, 0.5);
          tex.rotation = (angleInDegrees * Math.PI) / 180;
          floorMaterial.map = tex;
          floorMaterial.needsUpdate = true;

          // Force an explicit render frame immediately to guarantee it is drawn
          renderer.render(scene, camera);
          resolve(true); // Tell React the floor is officially ready
        }, undefined, (err) => {
          console.error("Texture load failed", err);
          resolve(false);
        });
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
      updateTexture
    };
  } catch (error) {
    console.error("Three.js Init Error:", error);
    return null;
  }
};
