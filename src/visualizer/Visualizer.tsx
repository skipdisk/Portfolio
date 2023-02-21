import "./Visualizer.css";
import "./index.css";
import { Suspense } from "react";
import { Leva, useControls } from "leva";
import {
  ApplicationMode,
  APPLICATION_MODE,
  getAppModeDisplayName,
  getPlatformSupportedApplicationModes,
} from "./components/applicationModes";
import AudioFFTAnalyzer from "./components/analyzers/audioFFTAnalyzer";
import AudioScopeAnalyzer from "./components/analyzers/audioScopeAnalyzer";
import AudioScopeCanvas from "./components/canvas/AudioScope";
import Visual3DCanvas from "./components/canvas/Visual3D";

const getAnalyzerComponent = (mode: ApplicationMode): JSX.Element | null => {
  switch (mode) {
    case APPLICATION_MODE.AUDIO:
      return <AudioFFTAnalyzer />;
    case APPLICATION_MODE.AUDIO_SCOPE:
      return <AudioScopeAnalyzer />;
    default:
      return null;
  }
};

const AVAILABLE_MODES = getPlatformSupportedApplicationModes();

const getCanvasComponent = (mode: ApplicationMode): JSX.Element => {
  console.log(mode);
  switch (mode) {
    case APPLICATION_MODE.AUDIO_SCOPE:
      return <AudioScopeCanvas />;
    default:
      return <Visual3DCanvas mode={mode} />;
  }
};

const Visualizer = (): JSX.Element => {
  const modeParam = new URLSearchParams(document.location.search).get(
    "mode"
  ) as ApplicationMode | null;
  const { mode } = useControls({
    mode: {
      value:
        modeParam && AVAILABLE_MODES.includes(modeParam)
          ? modeParam
          : AVAILABLE_MODES[0],
      options: AVAILABLE_MODES.reduce(
        (o, mode) => ({ ...o, [getAppModeDisplayName(mode)]: mode }),
        {}
      ),
      order: -100,
    },
  });

  return (
    <div className="w-screen h-screen">
      <Leva collapsed={true} />
      <Suspense fallback={<span>loading...</span>}>
        {getAnalyzerComponent(mode as ApplicationMode)}
        {getCanvasComponent(mode as ApplicationMode)}
      </Suspense>
    </div>
  );
};

export default Visualizer;
