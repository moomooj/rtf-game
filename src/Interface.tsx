import styled from "styled-components";
import { useKeyboardControls } from "@react-three/drei";
import { useRecoilState, useRecoilValue } from "recoil";
import { endTime, phase, startTime } from "./atome";
import { useEffect, useRef } from "react";
import { addEffect } from "@react-three/fiber";

function Interface() {
  const [state, setState] = useRecoilState(phase);
  const info = useRecoilValue(phase);
  const startTimeDate = useRecoilValue(startTime);
  const endTimeDate = useRecoilValue(endTime);

  const time = useRef<HTMLDivElement>(null!);

  const forward = useKeyboardControls((state) => state.forward);
  const backward = useKeyboardControls((state) => state.backward);
  const leftward = useKeyboardControls((state) => state.leftward);
  const rightward = useKeyboardControls((state) => state.rightward);
  const jump = useKeyboardControls((state) => state.jump);

  useEffect(() => {
    const unsubscribeEffect = addEffect(() => {
      let elapsedTime = 0;

      if (info === "playing") {
        elapsedTime = Date.now() - startTimeDate;
      } else if (info === "ended") {
        elapsedTime = endTimeDate - startTimeDate;
      }
      elapsedTime /= 1000;
      elapsedTime = Number(elapsedTime.toFixed(1));

      if (time.current) {
        time.current.textContent = String(elapsedTime);
      }
    });

    return () => {
      unsubscribeEffect();
    };
  }, [info]);

  const onClick = () => {
    setState("ready");
  };

  return (
    <InterfaceWrap>
      <Time ref={time}> 0.00 </Time>
      {state === "ended" ? <Restart onClick={onClick}>ReStart</Restart> : null}
      <Controls>
        <div className="controls">
          <div className="raw">
            <div className={`key ${forward ? "active" : ""}`}></div>
          </div>
          <div className="raw">
            <div className={`key ${leftward ? "active" : ""}`}></div>
            <div className={`key ${backward ? "active" : ""}`}></div>
            <div className={`key ${rightward ? "active" : ""}`}></div>
          </div>
          <div className="raw">
            <div className={`key large ${jump ? "active" : ""}`}></div>
          </div>
        </div>
      </Controls>
    </InterfaceWrap>
  );
}

export default Interface;

const InterfaceWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  font-family: "Bebas Neue", cursive;
`;

const Time = styled.div`
  position: absolute;
  top: 15%;
  left: 0;
  width: 100%;
  color: #ffffff;
  font-size: 6vh;
  background: #00000033;
  padding-top: 5px;
  text-align: center;
`;

const Restart = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 40%;
  left: 0;
  width: 100%;
  color: #ffffff;
  font-size: 80px;
  background: #00000033;
  padding-top: 10px;
  pointer-events: auto;
  cursor: pointer;
`;

const Controls = styled.div`
  position: absolute;
  bottom: 10%;
  left: 0;
  width: 100%;
  .raw {
    display: flex;
    justify-content: center;
  }
  .key {
    width: 40px;
    height: 40px;
    margin: 4px;
    border: 2px solid #ffffff;
    background: #ffffff44;
  }
  .key.large {
    width: 144px;
  }
  .key.active {
    background: #ffffff99;
  }
`;
