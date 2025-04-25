import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function Model({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  const [scale, setScale] = useState(1);
  const modelRef = useRef();

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const targetHeight = 1.5;
    const uniformScale = targetHeight / size.y;

    setScale(uniformScale);
    scene.position.y = (-box.min.y * uniformScale)-0.8;

  }, [scene, modelPath]);

  return <primitive ref={modelRef} object={scene} scale={scale} />;
}

function CardsModel({ modelPath }) {
  const fov = modelPath.includes("e123Omega") ? 50 : 35;

  return (
    <div style={{ width: '100%', height: '25vh', }}>
      <Canvas camera={{ position: [0, 0, 3], fov }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model modelPath={modelPath} />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

export default CardsModel;
