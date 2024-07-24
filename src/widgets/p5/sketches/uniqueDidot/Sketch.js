import React from "react";
import { useRef, useEffect } from "react";
import * as p5 from "p5";

// import Vehicle from "./Vehicle";
import font from "../../../../assets/fonts/HelveticaNeueLTStd-Bd.otf";

export default function Sketch({
  width,
  height,
  text,
  isModified,
  mainObjColor,
  backgroundColor,
}) {
  const containerRef = useRef(null);

  const Sketch = (p) => {
    const canvasWidth = width;
    const canvasHeight = height;

    let vehicles = [];
    let loadedFont;
    // let canvasCorrection = canvasWidth / 2;
    let canvasCorrection = 0;
    let fontSize = canvasWidth / text.length;
    let mouseCorrection = fontSize / 2;
    let heightOfText;
    let widthOfText;
    let colorFactor;

    //  Nothing besides load calls (loadImage, loadJSON, loadFont, loadStrings, etc.) should be inside the preload function.
    p.preload = () => {
      loadedFont = p.loadFont(font);
    };
    //
    p.setup = () => {};

    p.draw = () => {};

    // p.keyPressed = () => {
    //   if (p.key === "d") {
    //     p.saveCanvas("myCanvas", "jpg");
    //   }
    // };
  };

  useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove(); // eslint-disable-next-line
  }, [width, height, isModified, text, mainObjColor]);

  return <div ref={containerRef}></div>;
}
