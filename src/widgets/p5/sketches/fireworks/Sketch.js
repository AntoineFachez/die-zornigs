import React from 'react';
import { useRef, useEffect } from 'react';
import * as p5 from 'p5';

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
    let objs = [];
    class Firework {
      constructor(x, c) {
        this.x = x;
        this.c = c;
        this.t = 0;
        this.s = p.random(2, 8);
        this.v = p.random(2, 3);
        this.special = p.random() > 0.9;
      }
      draw() {
        this.t++;
        p.noStroke();
        const count = this.special ? 397 : 251;
        if (this.t < p.random(140, 160)) {
          this.pos = p.createVector(
            this.x + p.sin(this.t / 15) * 5,
            height - this.t * this.v * 1.4
          );
          p.fill(this.c);
          p.circle(this.pos.x, this.pos.y, this.s);
        } else if (this.t > p.random(175, 195)) {
          const seed = p.random(0, 2100000000);
          p.randomSeed(p.frameCount - this.t);
          for (let i = 0; i < count; i++) {
            const r = (i / count) * p.TAU;
            const t = this.t - 200;
            const s = t * p.sin(i);
            if (this.special) {
              p.fill(
                p.random(120, 240),

                p.random(120, 240),
                p.random(120, 240)
              );
            } else {
              p.fill(this.c);
            }
            p.circle(
              this.pos.x + p.sin(r) * t,
              this.pos.y + p.cos(r) * s + p.pow(t * 0.02, 2),
              3
            );
          }
          p.randomSeed(seed);
        }
      }
      dead() {
        this.pos.y += this.t * 0.0005; // Adjust the 0.01 factor for desired descent speed

        return this.t > p.random(400, 550);
      }
    }
    //  Nothing besides load calls (loadImage, loadJSON, loadFont, loadStrings, etc.) should be inside the preload function.
    p.preload = () => {};
    //
    p.setup = () => {
      p.createCanvas(canvasWidth, canvasHeight);
      p.colorMode(p.HSB);
      p.background(0, 0, 0, 0);

      objs.push(new Firework(width / 2, p.color(220, 120, 120)));
    };

    p.draw = () => {
      p.clear();
      p.background(0, 0, 0, 0);
      for (let fw of objs) {
        fw.draw();
      }
      objs = objs.filter((fw) => !fw.dead());
    };
    p.mouseClicked = () => {
      // const c = p.color(
      //   p.random(120, 240),
      //   p.random(120, 240),
      //   p.random(120, 240)
      // );
      const hue = p.random(0, 360); // Random hue across the entire spectrum (0-360)
      const saturation = p.random(120, 240);
      const brightness = p.random(120, 240);
      const c = p.color(hue, saturation, brightness);
      objs.push(new Firework(p.mouseX, c));
    };
  };

  useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove(); // eslint-disable-next-line
  }, [width, height, isModified, text, mainObjColor]);

  return <div ref={containerRef}></div>;
}
