import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { gsap } from 'gsap';

const OpaOpaModel = () => {
  const ref = useRef();
  const { scene } = useGLTF('/models/opaopa.glb');

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        const mat = new THREE.MeshStandardMaterial({
          roughness: 0.4,
          metalness: 0.3,
        });

        switch (child.name) {
            case 'Opa_Opa_0': // Main body (top)
              mat.color.set('#ffffff'); break;
            case 'Opa_Opa_1': // Glass dome
              mat.color.set('#00aaff'); // Solid royal blue
              mat.opacity = 1;
              mat.transparent = false;
              break;
            case 'Opa_Opa_2': // Lower body
              mat.color.set('#00aaff'); break;
            case 'Opa_Opa_3': // Ring/trim
              mat.color.set('#ffd591'); break;
            case 'Opa_Opa_4': // Legs
              mat.color.set('#c0ca33'); break;
            case 'Opa_Opa_5': // Feet
              mat.color.set('#ffd591'); break;
            case 'Opa_Opa_6': // Other details
              mat.color.set('#9e9e9e'); break;
            case 'Right_Wing_0':
            case 'Left_Wing_0':
              mat.color.set('#ffd591'); break;
            default:
            //   mat.color.set('#c0ca33'); break;
          }

        child.material = mat;
      }
    });
  }, [scene]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y += 0.002;
      ref.current.rotation.x = Math.sin(t * 0.3) * 0.1;
    }
  });

  return <primitive ref={ref} object={scene} scale={0.18} />;
};

const OpaOpaFloating = ({
  movementSpeed = 80,      // Adjust this for slower/faster movement
  movementBounds = {     // Adjust the bounding area
    width: 100,
    height: 100,
  },
}) => {
  const wrapperRef = useRef();

  useEffect(() => {
    const floatAround = () => {
      const x = Math.random() * movementBounds.width;
      const y = Math.random() * movementBounds.height;
      gsap.to(wrapperRef.current, {
        x,
        y,
        duration: movementSpeed,
        ease: 'sine.inOut',
        onComplete: floatAround,
      });
    };

    gsap.set(wrapperRef.current, { x: 0, y: 0 });
    floatAround();
  }, [movementSpeed, movementBounds]);

  return (
    <div
      ref={wrapperRef}
      style={{
        width: '60vh',
        height: '60vh',
        margin: '10vh auto 0vh',
        position: 'relative',
        pointerEvents: 'none',
      }}
    >
        
      <Canvas camera={{ position: [0, 1, 3] }} >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={0.6} />
        <OpaOpaModel />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
};

export default OpaOpaFloating;