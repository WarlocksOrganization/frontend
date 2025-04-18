import React, {Suspense, useEffect} from 'react';
import {useAnimations, useGLTF} from '@react-three/drei';

export function ClericModel() {
    const gltf = useGLTF('/model/clecric/Premade_Monk.gltf');
    // const gltf = useGLTF(modelURL);
    const { animations } = gltf
    const { ref, mixer, actions } = useAnimations(animations, gltf.scene)

    useEffect(() => {
        if (actions && animations.length > 0) {
            actions["Monk@Run"]?.reset().play()
        }
    }, [actions, animations])

    return <primitive
        object={gltf.scene}
        scale={1.1}
        position={[0, -0.6, 0]}
        rotation={[Math.PI / 20, 0.3, 0]}
    />;
}
