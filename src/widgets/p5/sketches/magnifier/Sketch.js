import React, { useState } from 'react';
import { useRef, useEffect } from 'react';
import * as p5 from 'p5';

import { Particle } from '../../objects/Particle';

export default function Sketch({
  width,
  height,
  // droppedJSON,
  // text,
  selectedImageUrl,
  // isModified,
  // mainObjColor,
}) {
  const sketchRef = useRef(null);

  const canvasWidth = width;
  const canvasHeight = height;

  //* MENU
  let menu;
  let sliders = [];
  let colorPickers = [];
  let res = 1;
  let frameR = 5;
  let img;
  let ratio = height / width;

  //* DATA
  let data;
  let ticksColor = 'rgb(255, 200, 10)';
  let months = [];
  let currentRow = 0;
  let currentMonth = 0;

  //* IMAGE PROCESSING
  let hex;

  let picUrl = selectedImageUrl;
  let sourceImg;
  let capture;
  let pixels = [];
  let particles = [];
  let points = [];
  let r = 5;
  let c;
  let halfImage;

  //* what was that for?
  let prevAnomaly = 0;

  //* what was that for?
  let zeroDegAnomaly = 120;
  let oneDegAnomaly = 200;

  //* VEHICELS & PATHS
  let path;
  let flock = [];
  let boid;
  let prevAngle = 0;
  let vehicle;
  let vehicle2;
  let pursuer;
  let target1;
  let target2;
  let target3;
  let targets = [];

  const Sketch = (p) => {
    p.preload = () => {
      sourceImg = p.loadImage(picUrl);
    };

    p.setup = () => {
      p.frameRate(frameR);
      p.pixelDensity(1);
      let cnv = p.createCanvas(canvasWidth, canvasHeight);
      img = sourceImg;
      placeParticles(p);
      p.noStroke();
    };

    p.draw = () => {
      p.clear();
      p.background(0, 0, 0, 0);
      // p.background(255);
      p.push();
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(p);
        particles[i].show(res, p);
      }
      p.pop();
    };
    // p.noLoop();
    p.mousePressed = () => {};
    p.mouseReleased = () => {};
  };

  function placeParticles(p) {
    let scale = ratio * 2;
    for (let i = 0; i < width; i += res) {
      for (let j = 0; j < height; j += res) {
        let x = (i / width) * height;
        let y = (j / width) * height;
        let c = img.get(x, y);
        particles.push(
          new Particle(
            i + (canvasWidth / 2 - img.width / 2 / ratio),
            j + (canvasHeight / 2 - img.height / 2 / ratio),
            c,
            p
          )
        );
      }
    }
  }

  useEffect(() => {
    let inst = new p5(Sketch, sketchRef.current);
    return () => inst.remove(); // eslint-disable-next-line
  }, [
    width,
    height,
    // isModified,
    // droppedJSON,
    // mainObjColor,
    // text,
    // sliders,
    selectedImageUrl,
    // picUrl,
  ]);

  return (
    <div id="p5-template" ref={sketchRef}>
      {/* <img src={picUrl} alt="" /> */}
    </div>
  );
}
