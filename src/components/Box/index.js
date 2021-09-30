import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"

import * as THREE from 'three';

const clock = new THREE.Clock()

export default function Box(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => {
        const elapsedTime = clock.getElapsedTime()
        mesh.current.rotation.x += 0.01;
        mesh.current.rotation.y += 0.01;
        mesh.current.rotation.z += 0.01;

        setTimeout(() => {
            const boxAngle = elapsedTime * 0.9
            mesh.current.position.x = Math.cos(boxAngle) * 3
            mesh.current.position.z = Math.sin(boxAngle) * 3
            mesh.current.position.y = Math.sin(elapsedTime * 2)
        }, props.second * 1000)

        
    })
    // Return view, these are regular three.js elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
  }