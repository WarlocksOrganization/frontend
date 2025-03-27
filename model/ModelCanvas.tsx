import {Canvas} from "@react-three/fiber";
import {ReactNode} from "react";

interface ModelCanvasProps {
    children: ReactNode
}
const ModelCanvas = ({children}: ModelCanvasProps) => {

    return (
        <>
            <div className="items-center justify-between ">
                <div style={{ width: "50vw", height: "70vh"}}>
                    <Canvas
                        camera={{
                            position: [0, 0, 2],
                        }}
                        gl={{antialias: true}}
                    >
                        <ambientLight/>
                        {children}
                    </Canvas>
                </div>
            </div>
        </>
    )
}

export default ModelCanvas