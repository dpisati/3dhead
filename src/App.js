import './App.css';

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Shadow } from '@react-three/drei'
import { Suspense } from "react";
import DanielHead from "./components/DanielHead";
import Box from './components/Box';


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
            minDistance={5}               
            maxDistance={8}               
          />
          <Environment preset="sunset" background={false} />
          
          <DanielHead position={[0, 0, 1]}/>

          <Box position={[0, 0, 0]} second={1} />
          <Box position={[0, 0, 0]} second={2} />
          <Box position={[0, 0, 0]} second={3} />
          <Box position={[0, 0, 0]} second={4} />
          <Box position={[0, 0, 0]} second={5} />
          <Box position={[0, 0, 0]} second={6} />
          <Box position={[0, 0, 0]} second={7} />

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
