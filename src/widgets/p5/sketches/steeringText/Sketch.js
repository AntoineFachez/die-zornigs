import React from 'react';
import { useRef, useEffect } from 'react';
import * as p5 from 'p5';

import Vehicle from './Vehicle';
// import font from '../../../../assets/fonts/SendFlowers-Regular.ttf';
// import font from '../../../../assets/fonts/MobileFont.ttf';
import font from '../../../../assets/fonts/HelveticaNeueLTStd-Bd.otf';

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
    p.setup = () => {
      p.createCanvas(canvasWidth, canvasHeight);
      p.colorMode(p.HSB);
      // p.background(backgroundColor);
      p.background(0, 0, 0, 0);
      p.textSize(fontSize);
      widthOfText = p.textWidth(text); // Get the width of the string
      heightOfText = fontSize; // The height of the text is equal to the font size
      console.log(canvasWidth / 2, widthOfText / 2);
      let points = loadedFont.textToPoints(
        text,
        canvasWidth * 0.8 - widthOfText * 1.3,

        canvasHeight * 0.5,
        fontSize * 1.1,
        {
          // sampleFactor: p.constrain(fontSize * 0.02, 0.1, 0.15),
          sampleFactor: p.constrain(fontSize * 0.1, 0.12, 0.17),
          simplifyThreshold: 0,
          // simplifyThreshold: 0.01,
        }
      );
      for (var i = 0; i < points.length; i++) {
        let pt = points[i];
        let vehicle = new Vehicle(
          i,
          pt.x,
          pt.y,
          p,
          p5,
          width,
          height,
          points
          // mainObjColor
        );
        vehicles.push(vehicle);
      }
      colorFactor = 0.1;
    };

    p.draw = () => {
      // p.background(backgroundColor);
      p.clear();
      p.background(0, 0, 0, 0);
      p.push();
      p.translate(canvasCorrection, fontSize / 2);
      // p.translate(p.map(), 0);
      for (let i = 0; i < vehicles.length; i++) {
        let v = vehicles[i];
        let vehiclesLength = vehicles.length;
        v.behaviors(canvasCorrection, mouseCorrection, p5, p);
        v.update();
        v.show(v, p);
      }
      p.pop();
    };

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
