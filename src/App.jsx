import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import React, { Suspense, useState, useEffect  } from 'react'
import { Canvas,  useThree } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { EffectComposer , DepthOfField } from '@react-three/postprocessing'
// import birthdaySong from "./audio/happy-birthday-music-box.mp3"
// import { Archer } from "./components//Archer";
import { Fox } from "./components/Fox";
import { GltfModel } from "./components/GltfModel";

 
// Orbit-Controls
const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect( () => {
        const controls = new OrbitControls(camera, gl.domElement);
        controls.minDistance = 3;
        controls.maxDistance = 20;
        return () => {
          controls.dispose();
        };
     },
     [camera, gl]
  );
  return null;
};



function Sound(){
  
  const ping = new Audio(birthdaySong)

 // const ping = new Audio(pingSound)
ping.load();
ping.muted = true;
document.addEventListener('keyup', () => {
  ping.muted = false;
  ping.play();
});
 
  return(
   console.log(ping) 
  )
}

export default function App({  modelPath, scale = 1, position = [0, 0, 0] , count = 15,  depth=60}) {
  const [action, setAction] = useState("Runforward");
  return (
    <>
    <Canvas gl={{ alpha: false }} camera={{ near: 0.01, far: 110, fov: 30, position:[0, -0.3, 3.8] }}>
    <color  attach="background" args={["#81B1EB"]} />
    <Suspense fallback={null}>
    <ambientLight intensity={0.2} />
    
    <Fox action={action}  scale="0.7"/>
    <CameraController />
    <spotLight position={[10,10,10]}  intensity={2} />
    
    
    <GltfModel modelPath={"gltf/zahlen-gold-10.glb"} scale="1"  position = {[0, -0.4, 0]}  />
    

    <Environment preset="sunset" />
    
    <EffectComposer>
      <DepthOfField // target of focallength camera 60 ,depth = 60 /> hälfte
      // zwischjen kamera und 0 depth / 2
      //  target={[0,0,0]} focalLength={0.2} bokehScale={10} height={700} />
      
      target={[0,0,0]} focalLength={1.0} bokehScale={20} height={700} />
    </EffectComposer>
    </Suspense>
   
  </Canvas>

 
   </>
    )
}