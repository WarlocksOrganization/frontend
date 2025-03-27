import React, { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';

export function MainMenuModel() {
    const gltf = useGLTF('/models/MainMenu/MainMenu.gltf');

    return <primitive object={gltf.scene} />;
}

// 필요 시 preload
useGLTF.preload('/models/MainMenu/MainMenu.gltf');