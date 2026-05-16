// AttractiveLoader.jsx
import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

const WORDS = ['Processing', 'Rendering', 'Calibrating', 'Optimizing', 'Aligning', 'Synthesizing'];

const AttractiveLoader = ({ productName = 'Design' }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);

  const mountRef = useRef(null);

  /* ── Word Cycling Logic ── */
  useEffect(() => {
    const id = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setWordIndex(i => (i + 1) % WORDS.length);
        setWordVisible(true);
      }, 300);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  /* ── Three.js 3D Holographic Plane Engine ── */
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030f0f, 0.05);

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 150);
    camera.position.set(0, 4.0, 8.5);
    camera.lookAt(0, 0, -2);

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // 4. Create the Massive Holographic Plane Grid
    const size = 60;
    const segments = 450; // Adjusted slightly for compact 4/3 card optimization
    const geometry = new THREE.PlaneGeometry(size, size, segments, segments);
    geometry.rotateX(-Math.PI / 2);

    const count = geometry.attributes.position.count;
    geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(count * 3), 3));

    const material = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const plane = new THREE.Points(geometry, material);
    scene.add(plane);

    // 5. Animation Loop
    const clock = new THREE.Clock();
    let animationFrameId;
    const colorLow = new THREE.Color('#210d02');   // Deep amber void
    const colorMid = new THREE.Color('#e60800');   // Vivid core orange
    const colorHigh = new THREE.Color('#ff00bf');  // Bright highlight yellow
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const time = clock.getElapsedTime();
      const positions = geometry.attributes.position;
      const colors = geometry.attributes.color;

      plane.rotation.y = time * 0.03;

      for (let i = 0; i < count; i++) {
        const x = positions.getX(i);
        const z = positions.getZ(i);
        const dist = Math.sqrt(x * x + z * z);

        const radialWave = Math.sin(dist * 1.5 - time * 2.5) * 0.35;
        const directionalWaveX = Math.sin(x * 0.8 + time * 1.2) * 0.25;
        const directionalWaveZ = Math.cos(z * 1.0 - time * 1.0) * 0.25;

        const y = radialWave + directionalWaveX + directionalWaveZ;
        positions.setY(i, y);

        const normalizedHeight = (y + 0.85) / 1.7;
        const clampedHeight = Math.max(0, Math.min(1, normalizedHeight));

        const tempColor = new THREE.Color();
        if (clampedHeight < 0.5) {
          const mix = clampedHeight * 2;
          tempColor.lerpColors(colorLow, colorMid, mix);
        } else {
          const mix = (clampedHeight - 0.5) * 2;
          tempColor.lerpColors(colorMid, colorHigh, mix);
        }
        colors.setXYZ(i, tempColor.r, tempColor.g, tempColor.b);
      }

      positions.needsUpdate = true;
      colors.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // 6. Handle Window & Container Resize seamlessly
    const handleResize = () => {
      if (!mount.clientWidth || !mount.clientHeight) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(mount);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      className="absolute inset-0 z-[100]"
      style={{
        width: '100%',
        height: '100%',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap');

        .hologram-headline {
          font-family: 'Orbitron', monospace;
          font-size: 24px;
          font-weight: 900;
          letter-spacing: 0.45em;
          color: '#e0ffff';
          text-transform: uppercase;
          margin: 0;
          animation: textpulse 3s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .hologram-headline {
            font-size: 18px;
            letter-spacing: 0.3em;
          }
        }

        @keyframes textpulse {
          0%, 100% { opacity: 1;    text-shadow: 0 0 20px rgba(251, 253, 253, 0.9), 0 0 40px rgba(13,206,206,.4); }
          50%      { opacity: 0.65; text-shadow: 0 0 5px  rgba(213, 87, 34, 0.3); }
        }
        @keyframes barsway {
          0%, 100% { height: 6px; }
          50%      { height: 22px; }
        }
      `}</style>

      <div
        ref={mountRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      />

      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
        marginTop: '-40px',
        pointerEvents: 'none',
        transform: 'scale(0.9)' // Scale adjustment for cleaner containment inside 4/3 ratios
      }}>

        <h3 className="hologram-headline">
          Projecting
        </h3>

        <div style={{
          display: 'flex', alignItems: 'center', gap: 14,
          background: 'rgba(3, 20, 20, 0.6)',
          border: '1px solid rgba(206, 100, 13, 0.4)',
          padding: '10px 24px', borderRadius: 999,
          backdropFilter: 'blur(12px)',
          boxShadow: '0 8px 32px rgba(13, 206, 206, 0.15)'
        }}>

          <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 22 }}>
            {[0, 0.15, 0.3].map((delay, i) => (
              <div key={i} style={{
                width: 4, background: '#0dcece', borderRadius: 2,
                animation: `barsway .9s ease-in-out infinite`,
                animationDelay: `${delay}s`,
              }} />
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 6, minWidth: 220 }}>
            <span style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: 14, color: 'rgba(220, 255, 252, 0.9)',
              display: 'inline-block', minWidth: 100,
              transition: 'opacity .3s ease, transform .3s cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: wordVisible ? 1 : 0,
              transform: wordVisible ? 'translateY(0)' : 'translateY(-10px)',
            }}>
              {WORDS[wordIndex]}
            </span>
            <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 14, color: 'rgba(220, 255, 252, 0.9)' }}>
              <span style={{ fontFamily: "'Orbitron', monospace", fontSize: 14, fontWeight: 700, color: '#0dcece' }}>{productName}</span>...
            </span>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AttractiveLoader;