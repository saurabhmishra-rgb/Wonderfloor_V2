// script.jsx
import * as THREE from 'three';

export const initVisualizer = (container) => {
  if (!container) return null;

  try {
    const scene = new THREE.Scene();
    
    // INCREASED FAR CLIPPING PLANE TO 10000 so the back of the floor doesn't get cut off
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 10000);
    
    // Alpha: true is crucial so the base room image shows behind the 3D floor!
    // preserveDrawingBuffer: true is required for html2canvas to capture the 3D layer
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
    
    // MADE THE PLANE MASSIVE so you never see the edges
    const floorGeometry = new THREE.PlaneGeometry(8000, 8000);
    const floorMaterial = new THREE.MeshStandardMaterial({
      side: THREE.DoubleSide,
      transparent: true,
      roughness: 0.85,
      metalness: 0.0
    });

    const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
    // Tweak this value slightly if the perspective tilt looks too steep or flat
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
    };

    // ✅ FIX: Use ResizeObserver instead of window resize event
    // This catches React state changes that alter the container's size
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    const updateTexture = (textureUrl, angleInDegrees = 0) => {
      loader.load(textureUrl, (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
        
        // INCREASED REPEAT to match the massive floor (Adjust these numbers if tiles look too big or small)
        tex.repeat.set(240, 240); 
        
        tex.center.set(0.5, 0.5);
        tex.rotation = (angleInDegrees * Math.PI) / 180;
        floorMaterial.map = tex;
        floorMaterial.needsUpdate = true;
      });
    };

    return {
      cleanup: () => {
        cancelAnimationFrame(animationFrameId);
        // ✅ FIX: Disconnect the observer to prevent memory leaks
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
