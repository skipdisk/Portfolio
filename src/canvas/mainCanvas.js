import { RGBELoader } from "three-stdlib";
import { Canvas, extend, useLoader } from "@react-three/fiber";
import {
  Environment,
  Lightformer,
  OrbitControls,
  RandomizedLight,
  AccumulativeShadows,
  Effects,
} from "@react-three/drei";
import { useControls, button } from "leva";
import { useRef } from "react";

import { UnrealBloomPass } from "three-stdlib";

extend({ UnrealBloomPass });

const MainCanvas = ({ children }) => {
  const main = useRef();
  const { autoRotate, text, shadow, ...config } = useControls({
    text: "Slimic",
    backside: false,
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
    color: "#a68fd5",
    gColor: "#2e2020",
    shadow: "#1d0029",
    autoRotate: false,
    screenshot: button(() => {
      // Save the canvas as a *.png
      const link = document.createElement("a");
      link.setAttribute("download", "canvas.png");
      link.setAttribute(
        "href",
        document
          .querySelector("canvas")
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream")
      );
      link.click();
    }),
  });

  console.log(main);

  return (
    <div className="w-screen h-screen">
      {/* <Canvas
        shadows
        orthographic
        camera={{ position: [10, 20, 20], zoom: 80 }}
        gl={{ preserveDrawingBuffer: true }}
      > */}
      <Canvas
        // ref={main}
        shadows
        orthographic
        // dpr={[1, 2]}
        camera={{ position: [10, 20, 20], zoom: 50 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight color="#5b1ebd" intensity={0.5} />
        {/* <Environment preset="city" /> */}
        <color attach="background" args={["#5c3089"]} />
        <Effects disableGamma>
          <unrealBloomPass threshold={1} strength={1.0} radius={0.5} />
        </Effects>
        {children}
        {/** Controls */}
        <OrbitControls
          autoRotate={autoRotate}
          autoRotateSpeed={0.2}
          zoomSpeed={0.25}
          minZoom={40}
          maxZoom={140}
          enablePan={false}
          dampingFactor={0.05}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 3}
        />
        {/** The environment is just a bunch of shapes emitting light. This is needed for the clear-coat */}
        <Environment resolution={32}>
          <group rotation={[-Math.PI / 4, -0.3, 0]}>
            <Lightformer
              intensity={20}
              rotation-x={Math.PI / 2}
              position={[0, 5, -9]}
              scale={[10, 10, 1]}
            />
            <Lightformer
              intensity={2}
              rotation-y={Math.PI / 2}
              position={[-5, 1, -1]}
              scale={[10, 2, 1]}
            />
            <Lightformer
              intensity={2}
              rotation-y={Math.PI / 2}
              position={[-5, -1, -1]}
              scale={[10, 2, 1]}
            />
            <Lightformer
              intensity={2}
              rotation-y={-Math.PI / 2}
              position={[10, 1, 0]}
              scale={[20, 2, 1]}
            />
            <Lightformer
              type="ring"
              intensity={2}
              rotation-y={Math.PI / 2}
              position={[-0.1, -1, -5]}
              scale={10}
            />
          </group>
        </Environment>
        {/** Soft shadows */}
        <AccumulativeShadows
          temporal
          frames={100}
          color={shadow}
          colorBlend={5}
          toneMapped={true}
          alphaTest={0.9}
          opacity={1}
          scale={30}
          position={[0, -1.01, 0]}
        >
          <RandomizedLight
            amount={4}
            radius={10}
            ambient={0.5}
            intensity={1}
            position={[0, 10, -10]}
            size={15}
            mapSize={1024}
            bias={0.0001}
          />
        </AccumulativeShadows>
      </Canvas>
    </div>
  );
};

export default MainCanvas;
