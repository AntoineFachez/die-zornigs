import React, { useRef, useEffect } from "react";
import * as p5 from "p5";
import { Particle } from "./Particle";
import { getContrastColor } from "../../../../utils/colorFunctions";

export default function MagicalTrailShader2({ width, height, mainColor }) {
  console.log("mainColor", mainColor);
  const containerRef = useRef(null);
  let trail = [];
  let particles = [];

  const MAX_TRAIL_COUNT = 30;

  var colorScheme = ["#0A1B28", "#071F43", "#357D7E", "#35EEEE", "#919DF0"];

  const setup = (p) => {
    p.createCanvas(width, height);
    p.canvas.oncontextmenu = () => false; // Removes right-click menu.
    p.noCursor();
  };

  const draw = (p) => {
    p.blendMode(p.BLEND);
    p.clear();
    p.background(0, 0, 0, 0);
    p.blendMode(p.SCREEN);

    // Trim end of trail.
    trail.push([p.mouseX, p.mouseY]);

    let removeCount = 1;
    if (p.mouseIsPressed && p.mouseButton === p.CENTER) {
      removeCount++;
    }

    for (let i = 0; i < removeCount; i++) {
      if (trail.length === 0) {
        break;
      }

      if (p.mouseIsPressed || trail.length > MAX_TRAIL_COUNT) {
        trail.splice(0, 1);
      }
    }

    // Spawn particles.
    if (trail.length > 1) {
      let mouse = p.createVector(p.mouseX, p.mouseY);
      mouse.sub(p.pmouseX, p.pmouseY);
      if (mouse.mag() > 5) {
        mouse.normalize();
        for (let i = 0; i < 3; i++) {
          particles.push(
            new Particle(
              p.pmouseX,
              p.pmouseY,
              mouse.x,
              mouse.y,
              colorScheme,
              p,
              p5,
            ),
          );
        }
      }
    }

    // Move and kill particles.
    for (let i = particles.length - 1; i > -1; i--) {
      particles[i].move();
      if (particles[i].vel.mag() < 0.1) {
        particles.splice(i, 1);
      }
    }

    // Draw trail.
    p.drawingContext.shadowColor = p.color(0, 125, 255);

    for (let i = 0; i < trail.length; i++) {
      let mass = i * 1.5;
      p.drawingContext.shadowBlur = mass;

      p.stroke(0);
      p.strokeWeight(mass);
      p.point(trail[i][0], trail[i][1]);
    }

    // Draw particles.
    for (let i = 0; i < particles.length; i++) {
      let part = particles[i];
      let mass = part.mass * part.vel.mag() * 0.6;

      p.drawingContext.shadowColor = p.color(colorScheme[part.colorIndex]);
      p.drawingContext.shadowBlur = mass;

      p.stroke(mainColor);
      p.strokeWeight(mass);
      p.point(part.pos.x, part.pos.y);

      p.stroke(getContrastColor(mainColor));
      p.strokeWeight(mass * 0.05);
      p.point(part.pos.x, part.pos.y);
    }
  };

  useEffect(() => {
    let sketch = new p5((p) => {
      p.setup = () => setup(p);
      p.draw = () => draw(p);
    }, containerRef.current);

    return () => sketch.remove(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height]);

  return <div ref={containerRef}></div>;
}
