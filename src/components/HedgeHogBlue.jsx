import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import gsap from 'gsap';

const ShadowModel = () => {
  const modelRef = useRef();
  const { scene } = useGLTF('/models/hedgehog.glb');

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        const mat = new THREE.MeshStandardMaterial({
          roughness: 0.4,
          metalness: 0.3,
        });

        switch (child.name) {
          case 'Object_11':
          case 'Object_12':
            mat.color.set('#00aaff'); // Blue quills
            break;
          case 'Object_13':
            mat.color.set('#ffd591'); // Cream belly
            break;
          case 'Object_14':
            mat.color.set('#ffffff'); // Eyes
            break;
          case 'Object_16':
            mat.color.set('#ffd591'); // Shoes
            break;
          case 'Object_18':
            mat.color.set('#eeeeee'); // Gloves
            break;
          default:
            mat.color.set('#888888'); // Fallback
        }

        child.material = mat;
      }
    });


    if (modelRef.current) {
      modelRef.current.rotation.set(0, -Math.PI/2.4, 0);
      modelRef.current.position.set(0.1, -0.7, 0);
      modelRef.current.scale.set(0.4, 0.4, 0.4);
    }
  }, [scene]);


  return <primitive ref={modelRef} object={scene} />;
};

const Hedgehog = () => {
  const wrapperRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      wrapperRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out' }
    );
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '40vw',
        height: '80vh',
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      <Canvas camera={{ position: [-1.5, -1, 2.5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 1]} intensity={0.6} />
        <ShadowModel />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate />
      </Canvas>
    </div>
  );
};

export default Hedgehog;