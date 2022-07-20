import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
 

export  function Fox({ action }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("../gltf/fox2-v1.glb");
  const { actions } = useAnimations(animations, group);
  /* 
  useEffect(() => {
    if (previousAction) {
      actions[previousAction].fadeOut(0.2);
      actions[action].stop();
      const previousAction = usePrevious(action);
    }
    actions[action].play();
    actions[action].fadeIn(0.2);
  }, [actions, action, previousAction]);
  */

 
  useEffect(() => {
    console.clear
    console.log(actions)
   // Death, DrawArrow FallLoop, Idle, MoveDown,RunForward, Tpose
  // actions.walk_Arm_fox.play()
    actions.idle_1.play()
   // fox: actions
   /*
"walk_Arm_fwawalk": (...)
" walk_back": (...)
attack_1: (...)
attack_2: (...)
dead: (...)
eat_1: (...)
eat_2: (...)
hate: (...)
hit_back: (...)
hit_left: (...)
hit_right: (...)
idle_1: (...)
idle_2: (...)
jump: (...)
run: (...)
sleep_end: (...)
sleep_idle: (...)
sleep_start: (...)
   //actions.MoveDown.play()
  */
   },[])

  

   
  return (
    <group ref={group}  dispose={null}> ^

<group name="Scene" position={[0.0, -0.36, 0.9]} rotation={[0,(Math.PI*180), 0]} scale={0.38}>
     
      <group name="Arm_fox">
        <primitive object={nodes.first_bone} />
        <skinnedMesh
          name="Fox_low"
          geometry={nodes.Fox_low.geometry}
          material={materials["Forest_color.003"]}
          skeleton={nodes.Fox_low.skeleton}
           
          scale={[0.5,0.5,0.5]}
        />
      </group>
    </group>
  </group>
  )
}

useGLTF.preload("../gltf/fox2-v1.glb");

function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();
  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}