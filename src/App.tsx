import Lights from "./Lights";
import Level from "./Level";
import { Physics } from "@react-three/rapier";
import Player from "./Player";
import { blocksCount } from "./atome";
import { useRecoilValue } from "recoil";

function App() {
  const count = useRecoilValue(blocksCount);

  return (
    <>
      <color args={["#bdedfc"]} attach="background" />
      <Physics>
        <Lights />
        <Level count={count} />
        <Player />
      </Physics>
    </>
  );
}

export default App;
