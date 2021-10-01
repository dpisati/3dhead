import { useFrame, useLoader } from "@react-three/fiber"
import { useRef, useState } from "react"
import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// import reactSphere from '../../3dmodels/react.glb';
// import reactSphere from '../../3dmodels/html.glb';
const clock = new THREE.Clock()

export default function Sphere(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    console.log(hovered)

    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => {
        const elapsedTime = clock.getElapsedTime()
        // mesh.current.rotation.x += 0.01;
        mesh.current.rotation.y = -89.6;
        // mesh.current.rotation.z += 0.01;

        setTimeout(() => {
            const boxAngle = elapsedTime * 0.9
            mesh.current.position.x = Math.cos(boxAngle) * 3
            mesh.current.position.z = Math.sin(boxAngle) * 3
            mesh.current.position.y = Math.sin(elapsedTime * 2)
        }, props.second * 1000)

        
    })
    
    const gltf = useLoader(GLTFLoader, props.model3D);
    return (
        <>
        <primitive object={gltf.scene} 
              ref={mesh}
              scale={.27}
              onClick={(event) => setActive(!active)}
              onPointerOver={(event) => {setHover(true); console.log(mesh.current)}}
              onPointerOut={(event) => setHover(false)}
        />
      </>
    )
  }