import React, { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Box3, Vector3 } from 'three';

function CardsModel({ modelPath }) {
  const modelRef = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);

  useEffect(() => {
    if (modelRef.current) {
      const box = new Box3().setFromObject(modelRef.current);
      const size = new Vector3();
      box.getSize(size);

      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 1.5 / maxDim; // Normalize size to fit within a visual cube

      modelRef.current.scale.set(scale, scale, scale);

      const center = new Vector3();
      box.getCenter(center);
      modelRef.current.position.sub(center); // Center model in the card
    }
  }, [gltf]);

  return (
    <group ref={modelRef}>
      <primitive object={gltf.scene} />
    </group>
  );
}

export default CardsModel;
