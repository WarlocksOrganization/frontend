import React, {Suspense, useEffect} from 'react';
import {useAnimations, useGLTF} from '@react-three/drei';

export function NecroModel() {
    const gltf = useGLTF('/model/necro/Premade_Necromancer.gltf');
    // const gltf = useGLTF(modelURL);
    const { animations } = gltf
    const { ref, mixer, actions } = useAnimations(animations, gltf.scene)

    useEffect(() => {
        if (actions && animations.length > 0) {
            actions["Necromancer@Run"]?.reset().play()
        }
    }, [actions, animations])

    return <primitive
        object={gltf.scene}
        scale={1.3}
        position={[0, -0.6, 0]}
        rotation={[Math.PI / 20, 0.3, 0]}
    />;
}

// 필요 시 preload
useGLTF.preload('/models/MainMenu/MainMenu.gltf');