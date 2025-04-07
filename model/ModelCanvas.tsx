import {Canvas} from "@react-three/fiber";
import {ReactNode} from "react";
import {OrbitControls} from "@react-three/drei";

interface ModelCanvasProps {
    children: ReactNode
}
const ModelCanvas = ({children}: ModelCanvasProps) => {

    return (
        <>
            <div className="items-center justify-between ">
                <div style={{ width: "40vw", height: "56vh"}}>
                    <Canvas
                        camera={{
                            position: [0, 0, 2],
                        }}
                        gl={{antialias: true}}
                    >
                        <OrbitControls
                            enablePan={ false }
                        />
                        <ambientLight/>
                        {children}
                    </Canvas>
                </div>
            </div>
        </>
    )
}

export default ModelCanvas