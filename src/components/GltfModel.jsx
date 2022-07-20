import React, {  useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import {  useLoader,useFrame  } from '@react-three/fiber'

export function GltfModel ({ modelPath, scale = 40, position = [0, 0, 0] }) {
    const ref = useRef();
    const gltf = useLoader(GLTFLoader, modelPath);
    const [hovered, hover] = useState(false);
  
    // Subscribe this component to the render-loop, rotate the mesh every frame
    
    // useFrame((state, delta) => (ref.current.rotation.y += 0.003));
    useFrame((state, delta) => (ref.current.rotation.y += 0.003));
    return (
      <>
        <primitive
          ref={ref}
          object={gltf.scene}
          position={position}
          scale={hovered ? scale *  1.1 : scale}
          
          onPointerOver={(event) => hover(true)}
          onPointerOut={(event) => hover(false)}
  
        />
      </>
      );
    };
   