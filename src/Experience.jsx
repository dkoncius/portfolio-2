// Model from: https://market.pmnd.rs/model/macbook

import { Text, Html, Float, Center, Environment, OrbitControls, useGLTF, PresentationControls, ContactShadows } from '@react-three/drei'
import MediaQuery from 'react-responsive'

export default function Experience()
{

    const {scene} = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

    const TEXT_PROPS = {
        maxWidth: 2,
        textAlign: 'center',
        color: '#ccc',
        font: 'https://fonts.gstatic.com/s/monoton/v10/5h1aiZUrOngCibe4TkHLRA.woff'
    }

    return <>

        <Environment preset='city'/>

        <color args={["#695b5b"]} attach="background" />

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

        {/* Light */}
        <rectAreaLight
            color={"#01bf71"}
            intensity={45}
            width={1.5}
            height={1.5}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
        />
        
        
        {/* Responsiviness */}
        {/* Big desktop */}
        <MediaQuery minWidth={1001}>
        <primitive object={scene} scale={1.2}>
            <Html 
            transform
            wrapperClass="htmlScreen"
            distanceFactor={1.17}
            position={[0, 1.56, -1.4]}
            rotation-x={-0.256}
            >
                <iframe src="https://dkoncius.github.io/react-website/" />
            </Html>
        </primitive>

        {/* Text */}
          <Text
        {...TEXT_PROPS}
        position={[2, 2, 0.75]}
        rotation={[ 0, -1.25, 0]}
        fontSize="0.5"
        >DEIVIDAS KONCIUS</Text>
        </MediaQuery>

        {/* Small desktop */}
        <MediaQuery minWidth={769} maxWidth={1000}>
        <primitive object={scene}>
            <Html 
            transform
            wrapperClass="htmlScreen"
            distanceFactor={1.17}
            position={[0, 1.56, -1.4]}
            rotation-x={-0.256}
            >
                <iframe src="https://dkoncius.github.io/react-website/" />
            </Html>
        </primitive>

        {/* Text */}
          <Text
        {...TEXT_PROPS}
        position={[2, 2, 0.75]}
        rotation={[ 0, -1.25, 0]}
        fontSize="0.5"
        >DEIVIDAS KONCIUS</Text>
        </MediaQuery>

        {/* Tablet */}
        <MediaQuery minWidth={500} maxWidth={768}>
        <primitive
        object={scene} position={[3, 0, 1]}>
            <Html 
            transform
            wrapperClass="htmlScreen"
            distanceFactor={1.17}
            position={[0, 1.56, -1.4]}
            rotation-x={-0.256}
            >
                <iframe src="https://dkoncius.github.io/react-website/" />
            </Html>
        </primitive>

        {/* Text */}
          <Text
        {...TEXT_PROPS}
        position={[5, 2, 0.75]}
        rotation={[ 0, -1.25, 0]}
        fontSize="0.3"
        >DEIVIDAS KONCIUS</Text>
        </MediaQuery>

        {/* mobile */}
        <MediaQuery maxWidth={500}>
        <primitive
        object={scene} position={[3, 0, 1]} scale={0.75} rotation-y={-0.75}>
            <Html 
            transform
            wrapperClass="htmlScreen"
            distanceFactor={1.17}
            position={[0, 1.56, -1.4]}
            rotation-x={-0.256}
            >
                <iframe src="https://dkoncius.github.io/react-website/" />
            </Html>
        </primitive>
        </MediaQuery>
              
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