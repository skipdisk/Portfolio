import { RGBELoader } from 'three-stdlib'
import { Canvas, useLoader } from '@react-three/fiber'
import {
  Center,
  Text3D,
  Instance,
  Instances,
  Environment,
  Lightformer,
  OrbitControls,
  RandomizedLight,
  AccumulativeShadows,
  MeshTransmissionMaterial,
  GradientTexture
} from '@react-three/drei'
import { useControls, button } from 'leva'

const TextLogo = () => {
  const { autoRotate, text, shadow, ...config } = useControls({
    text: 'Slimic',
    backside: true,
    samples: { value: 16, min: 1, max: 32, step: 1 },
    resolution: { value: 512, min: 64, max: 2048, step: 64 },
    transmission: { value: 0.6, min: 0, max: 1 },
    clearcoat: { value: 0, min: 0.1, max: 1 },
    clearcoatRoughness: { value: 0.0, min: 0, max: 1 },
    thickness: { value: 0.55, min: 0, max: 5 },
    chromaticAberration: { value: 5, min: 0, max: 5 },
    anisotropy: { value: 0.3, min: 0, max: 1, step: 0.01 },
    roughness: { value: 0.0, min: 0, max: 1, step: 0.01 },
    distortion: { value: 1, min: 0, max: 4, step: 0.01 },
    distortionScale: { value: 1, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0.4, min: 0, max: 1, step: 0.01 },
    ior: { value: 0.83, min: 0, max: 2, step: 0.01 },
    color: '#ff9cf5',
    gColor: '#ff7eb3',
    shadow: '#750d57',
    autoRotate: false,
    screenshot: button(() => {
      // Save the canvas as a *.png
      const link = document.createElement('a')
      link.setAttribute('download', 'canvas.png')
      link.setAttribute('href', document.querySelector('canvas').toDataURL('image/png').replace('image/png', 'image/octet-stream'))
      link.click()
    })
  })
  return (
    // <Text config={config} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 5]}>
    <Text config={config} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 3]}>
      {text}
    </Text>
  )
}

function Text({ children, config, font = '/Inter_Medium_Regular.json', ...props }) {
  const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr')
  return (
    <>
      <group>
        <Center scale={[0.2, 0.2, 0.3]} front top {...props}>
          <Text3D
            castShadow
            bevelEnabled
            font={font}
            scale={4.5}
            letterSpacing={-0.01}
            height={0.25}
            bevelSize={0.03}
            bevelSegments={20}
            curveSegments={128}
            bevelThickness={0.01}>
            {children}
            <MeshTransmissionMaterial reflectivity={0.5} {...config} background={texture} />
          </Text3D>
        </Center>
      </group>
    </>
  )
}

export default TextLogo
