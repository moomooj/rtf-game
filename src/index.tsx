import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Leva } from "leva";
import { KeyboardControls } from "@react-three/drei";
import Interface from "./Interface";
import { RecoilRoot } from "recoil";

const GolbalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body,
html {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ivory;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
*{
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: inherit;
}
#root{
  width: 100%;
  height: 100%;
}
.r3f
{
    touch-action: none;
}

`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <React.StrictMode>
      <RecoilRoot>
        <KeyboardControls
          map={[
            { name: "forward", keys: ["ArrowUp", "KeyW"] },
            { name: "backward", keys: ["ArrowDown", "KeyS"] },
            { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
            { name: "rightward", keys: ["ArrowRight", "KeyD"] },
            { name: "jump", keys: ["Space"] },
          ]}
        >
          <GolbalStyle />
          <Leva collapsed />
          <Canvas
            shadows
            camera={{
              fov: 45,
              near: 0.1,
              far: 200,
              position: [2.5, 4, 6],
            }}
          >
            <App />
          </Canvas>
          <Interface />
        </KeyboardControls>
      </RecoilRoot>
    </React.StrictMode>
  </>
);
