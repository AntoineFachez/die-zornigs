import React from "react";
import { useRef, useEffect } from "react";
import * as p5 from "p5";

import { Wobble } from "../../objects/PongWobbleParticle";
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

    let wobbles = [];
    let loadedFont;
    // let canvasCorrection = canvasWidth / 2;
    let canvasCorrection = 0;
    let fontSize = canvasWidth / text.length;
    let mouseCorrection = fontSize / 2;
    let heightOfText;
    let widthOfText;
    let colorFactor;
    let particles;
    let list;
    let posX, posY;
    let axis;
    // let font;
    let count, max;
    let fsize = 200;
    //  Nothing besides load calls (loadImage, loadJSON, loadFont, loadStrings, etc.) should be inside the preload function.
    p.preload = () => {
      loadedFont = p.loadFont(font);
    };
    //
    p.setup = () => {
      p.colorMode(p.HSB, 255, 255, 255);
      p.createCanvas(width, height);
      p.frameRate(30);
      p.noStroke();
      p.noCursor();
      // font = p.loadFont(font);
      p.textFont(font);
      p.fill(0);
      count = 0;
      max = 550;
      p.textAlign(p.CENTER, p.CENTER);
      p.text(text, width / 2, height / 2 - 70);
      list = new Array(width * height);

      // Innovative method to achieve a similar result as textToPoints in p5.js!
      p.loadPixels();
      for (let y = 0; y <= height - 1; y++) {
        for (let x = 0; x <= width - 1; x++) {
          let pb = p.get(x, y);
          if (p.red(pb) < 5) {
            list[y * width + x] = 0;
          } else {
            list[y * width + x] = 1;
          }
        }
      }
      p.updatePixels();

      wobbles = [];
    };

    p.draw = () => {
      // p.background(backgroundColor);
      p.clear();
      p.background(0, 0, 0, 0);
      if (count < max) {
        for (let i = 0; i < 3; i++) {
          axis = p.createVector(
            p.floor(p.random(100, width - 100)),
            p.floor(p.random(100, height - 100)),
          );
          if (list[p.floor(axis.y * width + axis.x)] === 0) {
            wobbles.push(new Wobble(axis.x, axis.y, fsize, p));

            i++;
            count++;
          }
        }
      }
      // p.background(255, 250, 245);
      for (let i = 0; i < wobbles.length; i++) {
        let w = wobbles[i];
        p.fill(0);
        w.display(p);
        w.update(width, list, p);
      }
      for (let j = 0; j < wobbles.length; j++) {
        let w = wobbles[j];
        p.fill(255, 250, 245);
        w.display2(p);
        w.update(width, list, p);
      }
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
