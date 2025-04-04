import React, {Suspense, useEffect} from 'react';
import {useAnimations, useGLTF} from '@react-three/drei';

export function MageModel() {
    const gltf = useGLTF('/model/mage/Premade_Mage.gltf');
    // const gltf = useGLTF(modelURL);
    const { animations } = gltf
    const { ref, mixer, actions } = useAnimations(animations, gltf.scene)

    useEffect(() => {
        if (actions && animations.length > 0) {
            actions["Mage@Run"]?.reset().play()
        }
    }, [actions, animations])

    return <primitive
        object={gltf.scene}
        scale={1.1}
        position={[0, -0.6, 0]}
        rotation={[Math.PI / 20, 0.3, 0]}
    />;
}
