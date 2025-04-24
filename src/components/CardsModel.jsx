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

    const maxDim = Math.max(size.x, size.y, size.z);
    const uniformScale = 1.5 / maxDim;

    setScale(uniformScale);

    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center.multiplyScalar(uniformScale));
    scene.position.y += 0.75; // Adjust vertically if needed

    // Custom tweaks for specific models
    if (modelPath.includes("tails")) {
      scene.position.y += 1.7;
    }
    if (modelPath.includes("infinite")) {
      scene.position.y -= 13.5;
    }
    if (modelPath.includes("jetHawk")) {
      scene.position.y += 0.97;
    }
    if (modelPath.includes("e123Omega")) {
      scene.position.y += 5;
    }
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
