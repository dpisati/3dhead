import React, { useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import daniel3D from '../../3dmodels/model.gltf';
// import daniel3D from '../mo../model.gltf'

export default function DanielHead() {
    const mesh = useRef()
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const [up, setUp] = useState(true)
    const [clockWise, setClockWise] = useState(true)
    
    useFrame((state, delta) => {    
      if(up) {
        mesh.current.position.y += 0.001
      } else {
        mesh.current.position.y -= 0.001
      }
  
      if(Math.ceil(mesh.current.position.y) === 2) {
        setUp(false)  
      }
  
      if(Math.ceil(mesh.current.position.y) === 0) {
        setUp(true)  
      }
      
      if(clockWise) {
        mesh.current.rotation.y += 0.001
      } else {
        mesh.current.rotation.y -= 0.001
      }
  
      if(Math.round(mesh.current.rotation.y * 10) / 10 === 0.3) {
        setClockWise(false)  
      }
  
      if(Math.round(mesh.current.rotation.y * 10) / 10 === -0.3) {
        setClockWise(true)  
      }
    })
  
    const gltf = useLoader(GLTFLoader, daniel3D);
    return (
      <>
        <primitive object={gltf.scene} 
              ref={mesh}
              scale={hovered ? .4 : .37}
              onClick={(event) => setActive(!active)}
              onPointerOver={(event) => {setHover(true); console.log(mesh.current)}}
              onPointerOut={(event) => setHover(false)}
        />
      </>
    );
  };
  
  