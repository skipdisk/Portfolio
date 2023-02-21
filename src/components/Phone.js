import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  PresentationControls,
  Environment,
  ContactShadows,
  Html,
  useFBX,
  useGLTF,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

import soundON from "../images/sound-on.png";
import soundOFF from "../images/sound-off.png";
import hoverSound from "../sounds/hover.mp3";
import clickSound from "../sounds/click.mp3";
import transitionSound from "../sounds/transition.mp3";
import bgMusic from "../sounds/music.mp3";

const Phone = (props) => {
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf"
  );

  return (
    <primitive
      object={scene}
      scale={0.6}
      rotation={[1.6, -0.5, 0]}
      {...props}
    />
  );
};

export default Phone;
