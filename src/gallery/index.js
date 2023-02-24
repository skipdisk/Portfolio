import { Canvas } from '@react-three/fiber'
import { MeshReflectorMaterial, Environment, OrbitControls, Lightformer, AccumulativeShadows, RandomizedLight, Effects, Center } from '@react-three/drei'

import Frames from './frames'
import TextLogo from './textLogo'
import { Bloom, EffectComposer } from '@react-three/postprocessing'

const images = [
  { position: [0, 0.2, 0.2], rotation: [0, 0, 0], url: '/art/image_1.jpg' },
  { position: [2.5, 0.2, 0], rotation: [0, 0, 0], url: '/art/image_2.jpg' },
  { position: [3.7, 0.2, -0.7], rotation: [0, 0, 0], url: '/art/image_3.jpg' },
  {
    position: [1.5, 0.2, -1.5],
    rotation: [0, 0, 0],
    url: '/art/image_4.jpg'
  },
  {
    position: [4, 0.2, 1],
    rotation: [0, 0, 0],
    url: '/art/image_5.jpg'
  },
  {
    position: [-3.7, 0.2, -0.7],
    rotation: [0, 0, 0],
    url: '/art/image_6.jpg'
  },
  // Right
  {
    position: [-2.5, 0.2, 0],
    rotation: [0, 0, 0],
    url: '/art/image_7.jpg'
  },
  {
    position: [-1.5, 0.2, -1.5],
    rotation: [0, 0, 0],
    url: '/art/image_8.jpg'
  },
  {
    position: [-4, 0.2, 1],
    rotation: [0, 0, 0],
    url: '/art/image_9.jpg'
  }
]

const Gallery = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas dpr={[1, 2]} camera={{ fov: 70, position: [1, 1, 9] }} gl={{ preserveDrawingBuffer: true }}>
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={0.2}
          zoomSpeed={0.25}
          minZoom={40}
          maxZoom={140}
          enablePan={false}
          dampingFactor={0.05}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 3}
          makeDefault
        />

        <color attach="background" args={['#38046c']} />
        <fog attach="fog" args={['#38046c', 0, 35]} />

        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={3} height={200} />
        </EffectComposer>

        <group position={[0, -0.5, 0]}>
          <Center>
            <Frames images={images} />
            <TextLogo />
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[100, 100]} />
              <MeshReflectorMaterial
                blur={[300, 100]}
                resolution={2048}
                mixBlur={1}
                mixStrength={50}
                roughness={2}
                depthScale={0.8}
                minDepthThreshold={0.8}
                maxDepthThreshold={1}
                color="#380042"
                metalness={0.5}
              />
            </mesh>
          </Center>
        </group>
        {/* <Environment preset="city" /> */}
        <Environment resolution={32}>
          <group rotation={[-Math.PI / 3.2, -0.3, 0]}>
            <Lightformer intensity={20} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
            <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[10, 2, 1]} />
            <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[10, 2, 1]} />
            <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 2, 1]} />
            <Lightformer type="ring" intensity={2} rotation-y={Math.PI / 2} position={[-0.1, -1, -5]} scale={10} />
          </group>
        </Environment>
        <AccumulativeShadows
          temporal
          frames={100}
          color={'#ff0073'}
          colorBlend={5}
          toneMapped={true}
          alphaTest={0.9}
          opacity={1}
          scale={30}
          position={[0, -1.01, 0]}>
          <RandomizedLight amount={4} radius={10} ambient={0.5} intensity={1} position={[0, 10, -10]} size={15} mapSize={1024} bias={0.0001} />
        </AccumulativeShadows>
      </Canvas>
    </div>
  )
}

export default Gallery
