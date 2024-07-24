import React from "react";
import { useRef, useEffect } from "react";
import * as p5 from "p5";

export default function Sketch({ width, height, isModified }) {
  const containerRef = useRef(null);

  const Sketch = (p) => {
    const canvasWidth = width;
    const canvasHeight = height;

    p.preload = () => {};
    //
    p.setup = () => {
      p.createCanvas(canvasWidth, canvasHeight);
      p.colorMode(p.HSB);
      p.background(0, 0, 0, 0);
    };

    p.draw = () => {
      p.clear();
      p.background(0, 0, 0, 0);
    };
  };

  useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove(); // eslint-disable-next-line
  }, [width, height, isModified]);

  return <div ref={containerRef}></div>;
}
