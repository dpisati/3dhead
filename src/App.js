import './App.css';

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Shadow } from '@react-three/drei'
import { Suspense } from "react";
import DanielHead from "./components/DanielHead";
import Sphere from './components/Sphere';
// import Box from './components/Box';

import hltmlSphere from './3dmodels/html.glb';
import cssSphere from './3dmodels/css.glb';
import javascriptSphere from './3dmodels/javascript.glb';
import typescriptSphere from './3dmodels/typescript.glb';
import reactSphere from './3dmodels/react.glb';
import figmaSphere from './3dmodels/figma.glb';
import githubSphere from './3dmodels/github.glb';


function App() { 
  return (
    <div style={{
      backgroundColor: '#ffffff',
      height: '100vh',
      width: '100vw',
      borderRadius: '32px'
      
    }}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight />

          <OrbitControls 
            enablePan={true} 
            enableZoom={true} 
            enableRotate={true} 
            minAzimuthAngle={-Math.PI / 3.5}
            maxAzimuthAngle={Math.PI / 2.5}
            minPolarAngle={Math.PI * .25}
            maxPolarAngle={Math.PI * .55}
            minDistance={7}               
            maxDistance={9}               
          />
          <Environment preset="sunset" background={false} />
          
          <DanielHead position={[0, 0, 0]}/>

          <Sphere position={[0, 0, 0]} scale={[.5, .5, .5]} second={1} model3D={hltmlSphere} />
          <Sphere position={[0, 0, 0]} scale={[.5, .5, .5]} second={2} model3D={cssSphere} />
          <Sphere position={[0, 0, 0]} scale={[.5, .5, .5]} second={3} model3D={javascriptSphere} />
          <Sphere position={[0, 0, 0]} scale={[.5, .5, .5]} second={4} model3D={typescriptSphere} />
          <Sphere position={[0, 0, 0]} scale={[.5, .5, .5]} second={5} model3D={reactSphere} />
          <Sphere position={[0, 0, 0]} scale={[.5, .5, .5]} second={6} model3D={githubSphere} />
          <Sphere position={[0, 0, 0]} scale={[.5, .5, .5]} second={7} model3D={figmaSphere} />
          {/* <Box position={[0, 0, 0]} second={2} />
          <Box position={[0, 0, 0]} second={3} />
          <Box position={[0, 0, 0]} second={4} />
          <Box position={[0, 0, 0]} second={5} />
          <Box position={[0, 0, 0]} second={6} />
          <Box position={[0, 0, 0]} second={7} /> */}

          <Shadow 
            position-y={-1.79} 
            rotation-x={-Math.PI / 2} 
            opacity={0.2} 
            scale={[2, 2, 2]} 
          />

          <pointLight position={[10, 10, 10]} />
        </Suspense>
      </Canvas>
    </div>

  )
}

export default App;
