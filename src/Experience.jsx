// Model from: https://market.pmnd.rs/model/macbook

import { Float, Center, Environment, PresentationControls, ContactShadows } from '@react-three/drei'
import Model from './Model'

export default function Experience()
{
    return <>

        <Environment preset='city'/>

        <color args={["#695b5b"]} attach="background" />

        {/* Light */}
        <rectAreaLight
        color={"#01bf71"}
        intensity={45}
        width={1.5}
        height={1.5}
        rotation={[0.1, Math.PI, 0]}
        position={[0, 0.55, -1.15]}
        />

        <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        // config={{ mass: 2, tension: 400}}
        snap={{ mass: 4, tension: 400 }}
        >

        <Float rotationIntensity={0.4}>
            <Center position-y={0.5}>
                <Model/>
            </Center>
        </Float>

        </PresentationControls>

        <ContactShadows
            position-y={-1.4}
            opacity={0.4}
            scale={5}
            blur={2.4}
        />
       
    </>
}