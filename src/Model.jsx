import { Html, Text, useGLTF } from "@react-three/drei"
import { useEffect, useState } from "react"

export default function Model() {
    const {scene} = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

    const TEXT_PROPS = {
        maxWidth: 2,
        textAlign: 'center',
        color: '#ccc',
        font: 'https://fonts.gstatic.com/s/monoton/v10/5h1aiZUrOngCibe4TkHLRA.woff'
    }

    const [scale, setScale] = useState(1)

    useEffect(() => {
        const handleResize = () => {
          const isMobile = window.innerWidth < 600
          const newScale = Math.min(window.innerWidth / 800, window.innerHeight / 1000)
          setScale(isMobile ? Math.max(newScale, 0.8) : Math.max(newScale, 0.6))
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
      }, [])

    useEffect(() => {
        console.log(scale)
    }, [scale])


  return (
    <>
       <primitive object={scene} scale={scale - 0.3}>
            <Html 
            transform
            wrapperClass="htmlScreen"
            distanceFactor={1.17}
            position={[0, 1.56, -1.4]}
            rotation-x={-0.256}
            >
                <iframe src="https://dkoncius.github.io/react-website/" />
            </Html>

        {/* Text */}
        <Text
        {...TEXT_PROPS}
        position={[2, 2, 0.75]}
        rotation={[ 0, -1.25, 0]}
        fontSize="0.5"
        >DEIVIDAS KONCIUS</Text>
    </primitive>
    </>
  )
}
