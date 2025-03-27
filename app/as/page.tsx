'use client'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import {Suspense} from "react";
import {MainMenuModel} from "@/features/MainMenuModel";

function App() {
  return (
      <Canvas camera={{ position: [-0.5, -0.5, 0] }}>
          <ambientLight intensity={1} />
          <directionalLight position={[3, 3, 3]} intensity={1.5} />
        <Suspense fallback={null}>
          <MainMenuModel/>
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls />
      </Canvas>
  );
}

export default App;
