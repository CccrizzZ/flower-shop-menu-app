import './App.css'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  Environment,
  CameraShake,
  Text3D,
  Image
} from '@react-three/drei'

const App: React.FC = () => {
  const Mfont = "/src/assets/Double_Feature_Regular.json"


  // const renderItemCard = () => {
  //   return (
  //     <>
  //       <Text color="black" anchorX="center" anchorY="middle">
  //         OG Kush - - -  - - - - - - - - - - - 800 THB
  //       </Text>
  //     </>
  //   )
  // }


  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <OrbitControls />
        <ambientLight />
        <mesh position={[0, 0, -10]} rotation={[Math.PI / 2, 0, 0]}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>

        <Text3D font={Mfont}>
          OG Kush ----------- 800THB
          <meshStandardMaterial color="purple" />
        </Text3D>
        <Image url="https://images.leafly.com/flower-images/WYY8ukOLRAuW8pdX2fVr_COOKIES%20&%20CREAM-181-edited.jpg" scale={[5, 5]} opacity={1} />


        <Environment
          background={true}
          blur={0}
          files="./src/assets/pool_4k.hdr"
        />
        <CameraShake
          maxPitch={0.01}
          maxRoll={0.01}
          maxYaw={0.01}
          pitchFrequency={0.2}
          rollFrequency={0.2}
          yawFrequency={0.2}
        />
      </Canvas>
    </div>
  )

}

export default App
