import React from 'react';
import {useGLTF} from '@react-three/drei';

export function FireBall() {
    const gltf = useGLTF('/model/skill/mage/AttackProjectilePrefab.gltf');
    const { animations } = gltf

    return <primitive
        object={gltf.scene}
        scale={1.1}
        position={[0, 0, 0]}
        rotation={[Math.PI / 20, 0.3, 0]}
    />;
}

// 필요 시 preload
useGLTF.preload('/models/MainMenu/MainMenu.gltf');
