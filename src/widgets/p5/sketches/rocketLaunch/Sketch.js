import React from 'react';
import { useRef, useEffect } from 'react';
import * as p5 from 'p5';
import font from '../../../../assets/fonts/SendFlowers-Regular.ttf';
export default function Sketch({
  width,
  height,
  isModified,
  mainObjColor,
  target, // absolute scroll position
  current, // soft scroll position
  setCurrent,
  animationEnd,
}) {
  const containerRef = useRef(null);
  console.log('currentFrame Sketch', current, animationEnd);
  const Sketch = (p) => {
    const canvasWidth = width;
    const canvasHeight = height;
    let textboxes = [
        { t: 'Zieh Runter', x: canvasWidth / 2, y: 250, at: 0.0 },
        { t: 'Bald hat', x: canvasWidth / 2 - 100, y: 270, at: 1000 },
        { t: 'Edgar', x: canvasWidth / 2 - 100, y: 290, at: 1500 },
        { t: 'Geb-', x: canvasWidth / 2 - 100, y: 320, at: 2300 },
        { t: 'urts-', x: canvasWidth / 2 - 100, y: 290, at: 2450 },
        { t: 'tag!', x: canvasWidth / 2 - 100, y: 200, at: 2650 },
        { t: '8 Jahre!', x: canvasWidth / 2 - 100, y: 240, at: 3500 },
        { t: 'macht', x: canvasWidth / 2 - 100, y: 120, at: 4350 },
        { t: 'Euch', x: canvasWidth / 2 - 100, y: 270, at: 4550 },
        { t: 'bereit!!', x: canvasWidth / 2 - 100, y: 360, at: 4700 },
        // { t: 'Achtuuuung!', x: canvasWidth / 2-200, y: 300, at: 6650 },
        { t: '3. August', x: canvasWidth / 2, y: 240, at: animationEnd },
        { t: '2024!', x: canvasWidth / 2, y: 300, at: animationEnd },
      ],
      particles = [],
      star = [], // static shift amounts
      cloud = []; // and sizes
    // ... Firework class (unchanged from the original template) ...

    function engine(x, y, angle, offset = 0) {
      // thin out particle stream
      if (p.frameCount % 4) return;

      // raw velocity and rotated (matrix transformed) velocity
      let d = [3 + Math.random() / 2, Math.random() / 5 - 0.1],
        dx = Math.cos(angle) * d[0] + Math.sin(angle) * d[1],
        dy = Math.cos(angle) * d[1] - Math.sin(angle) * d[0];

      particles.push(
        new Particle(
          x + dx * offset * 4,
          y + dy * offset * 4,
          dx,
          dy,
          15 + Math.random(),
          0.7 + Math.random() / 8
        )
      );
    }

    class Particle {
      constructor(x, y, dx, dy, size, rate) {
        // position
        this.x = x;
        this.y = y;
        // previous position
        this.lx = x;
        this.ly = y;
        // velocity
        this.dx = dx;
        this.dy = dy;
        // visuals
        this.size = size;
        this.rate = rate;
        // expiration counter
        this.age = 0;
      }

      update(delta) {
        // save previous positions
        this.lx = this.x;
        this.ly = this.y;
        // update current positions
        this.x += this.dx * delta;
        this.y += this.dy * delta;
        // update size & expiry
        this.size += this.rate * delta;
        this.age += Math.abs(delta);
      }

      draw() {
        p.push();

        // linear interpolate by age from white -> yellow -> red -> gray
        p.stroke(
          255 - p.min(155, this.age * 3), // red field decays slowest
          255 - p.min(155, this.age * 8), // green field decays faster, to transition yellow -> red
          255 - p.min(155, this.age * 30), // blue decays fastest for white -> yellow
          p.min(255, this.age * 20) - p.max(0, this.age - 255 / 15) * 5 // opacity shifts from low -> high -> none
        );
        p.strokeWeight(Math.abs(this.size));

        // draw a line between previous and current positions to visually smooth out when rocket is moving fast
        p.line(this.x, this.y, this.lx, this.ly);

        p.pop();
      }
    }
    let loadedFont;
    p.preload = () => {
      loadedFont = p.loadFont(font);
    };

    let on_mobile = false;

    p.setup = () => {
      p.textFont(loadedFont);
      let canvas = p.createCanvas(canvasWidth, canvasHeight).elt; // Get the actual canvas element
      canvas.addEventListener('wheel', mouseWheel); // Add the event listener
      // canvas.addEventListener('wheel', mouseWheel); // Add the event listener

      // p.colorMode(p.HSB);
      p.background(0, 0, 0, 0);
      p.textAlign(p.CENTER, p.CENTER);
      // infill static shifts
      for (let i = 0; i < 20; ++i) {
        star.push({
          x: (canvasWidth + 300) * p.noise(i * 20 - 25, 52) - 150,
          y: canvasHeight * 5 * Math.random(),
        });
      }

      for (let i = 0; i < 10; ++i) {
        cloud.push({
          w: p.noise(i * 20) * 200 - 50,
          h: p.noise(i * 20) * 120 - 20,
          s: -400 - 300 * p.noise(i * 30, 323),
          x: 800 * p.noise(i * 30 + 53) - 400,
        });
      }
    };

    p.draw = () => {
      p.clear();
      p.background(0, 0, 0, 0); // ... All your draw logic for the scrolling effects ...

      // ... Firework drawing logic (unchanged, keep it at the end) ...
      if (canvasWidth < canvasHeight || p.touches.length > 1) on_mobile = true; // really sketchy lmao
      if (on_mobile && p.mouseIsPressed)
        target = Math.max(current - 200, Math.min(current + 200, target + 4));

      let fade = 1 - Math.min(1, Math.max(0, (current - 2700) / 400)), // fade from sky -> space
        out = Math.max(0, (current - 4530) / 1200); // hyperspace jump fadeout
      p.background(160 * (fade + out), 160 * (fade + out), 255 * (fade + out));

      p.noStroke();
      for (let i = 0; i < star.length; ++i) {
        let sum = 0;

        if (fade < 0.7) {
          for (let s = 0; s < 3; ++s)
            sum += Math.max(
              0,
              1 -
                Math.abs(
                  // compute amount of twinkle
                  ((current / 400 + s * 8.333) % (star.length + 2)) - i - 1
                ) *
                  3
            );
        }

        // twinkling only occurs when the rocket is in space
        sum *= 1 - fade;
        sum *= Math.max(0, 1 - out * 30);

        // positions are precomputed and wraparound
        let y = ((current / 2 + star[i].y) % (canvasHeight + 20)) - 10,
          twinkle = 0.2 + Math.min(1, sum) * 0.8;

        // stars are dim and barely apparent in the sky etc
        p.fill(
          255,
          twinkle * (255 - fade * 200 * (1 + Math.max(0, (y - 200) / 2000)))
        );

        p.push();

        p.translate(star[i].x, y);
        p.scale(1, 1 + out * 200);
        p.rotate(
          ((1 - Math.cos(sum * Math.PI)) / 2) * Math.PI * (1 - 2 * (i % 2))
        ); // rotate during twinkling

        // approximate "star" shape with two rhombi which grow in opposite directions
        p.beginShape();
        p.vertex(3 - 2 * twinkle, 0);
        p.vertex(0, 24 * twinkle - 3);
        p.vertex(2 * twinkle - 3, 0);
        p.vertex(0, 3 - 24 * twinkle);
        p.endShape(p.CLOSE);

        p.beginShape();
        p.vertex(0, 3 - 2 * twinkle);
        p.vertex(12 * twinkle - 1, 0);
        p.vertex(0, 2 * twinkle - 3);
        p.vertex(1 - 12 * twinkle, 0);
        p.endShape(p.CLOSE);

        p.pop();
      }

      // remove expired particles
      particles = particles.filter((x) => x.age < 68);

      // ensure target is within bounds
      target = Math.min(6650, Math.max(0, target));
      // current moves 1/30th of the way towards target, creating
      // a soft scroll effect
      let dc = Math.max(-10, Math.min(10, (target - current) / 30));
      current += dc;
      setCurrent(current);
      // update particles
      for (let particle of particles) particle.update(dc);
      // spawn particles normalized to update speed
      for (let i = 0.05; i < dc; ++i) engine(200, 250, Math.PI * 1.5, i - 0.05);

      // draw clouds
      p.push();
      p.translate(0, current);
      let yp = 0,
        d = current / 300;

      for (let j = 0; j < 10; ++j) {
        p.push();
        p.translate(cloud[j].x, -200);

        // only draw clouds in frame
        if (Math.abs(yp + current - 50) < 500)
          for (let i = 0; i < 10; ++i) {
            p.noStroke();
            p.fill(255 - 5 * (10 - i), 100);

            p.ellipse(
              200 + 90 * p.noise(i + 10 + j * 50, d) - 45,
              200 -
                i +
                18 * p.noise(i + 20 + j * 50, d) -
                9 +
                140 -
                p.noise(i + 30 + j * 50, d) * 70,
              50 + p.noise(i + j * 50, d) * 90 + cloud[j].w,
              30 + p.noise(i + 30 + j * 50, d) * 30 + cloud[j].h
            );
          }

        p.pop();

        p.translate(200, cloud[j].s);
        yp += cloud[j].s;
      }

      p.pop();

      // once hyperspace jump complete add bg layer for text to overlay
      if (out > 1.53) {
        // p.fill(255 - 255 * (fade + out));
        // p.fill(0, 0, 0, 0);
        // let gradient = p.createLinearGradient(
        //   0,
        //   0,
        //   width,
        //   height,
        //   'red',
        //   'blue'
        // );
        // p.fill(gradient);
        // p.fill(0, 0, 0, 0);
        p.fill(mainObjColor);

        p.rect(0, 0, canvasWidth, canvasHeight);
      }

      // draw textboxes
      p.noStroke();
      p.fill(255 - 255 * (fade + out));
      p.textSize(40);
      p.textFont(loadedFont);
      for (let t of textboxes) {
        // lerp in and lerp out using a quartic polynomial transformation
        let y =
          Math.max(0, Math.abs(current - t.at) - 100) *
            Math.pow((current - t.at) / 200, 3) +
          (current - t.at) / 3;
        // ^ also move at constant velocity between lerps

        p.text(t.t, t.x, t.y + y);
      }

      // hide rocket & flame after jump complete
      if (out < 1.53) {
        p.push();

        p.translate(canvasWidth / 2, canvasHeight - current / 20 - 100);

        // squeeze/stretch effect during jump
        p.scale(1 - Math.max(0, out - 0.5), 1 + Math.max(0, out - 0.5) * 10);
        p.translate(-200, -300);
        p.translate(
          p.noise(current / 100) * 10 - 5,
          p.noise(current / 60 + 1000) * 10 - 5
        ); // subtle shake in flight

        // draw fins which are on back side of the rocket
        p.stroke(70);
        p.fill(100);
        for (let i = 0; i < 3; ++i) {
          let rot =
            (((Math.PI * 2) / 3) * i + current / 90 + Math.PI / 6) % p.TWO_PI;
          if (rot < Math.PI) continue;

          p.beginShape();
          p.vertex(200 + Math.cos(rot) * 10, 250);
          p.vertex(200 + Math.cos(rot) * 10, 220);
          p.vertex(200 + Math.cos(rot) * 20, 240);
          p.vertex(200 + Math.cos(rot) * 20, 260);
          p.endShape(p.CLOSE);
        }

        // draw exhaust
        for (let particle of particles) particle.draw();

        // draw rocket body
        p.rect(190, 160, 20, 90);
        p.beginShape();
        p.vertex(200, 100);
        p.vertex(207, 130);
        p.vertex(210, 160);
        p.vertex(190, 160);
        p.vertex(193, 130);
        p.endShape(p.CLOSE);

        // draw fins which are on front side of the rocket
        for (let i = 0; i < 3; ++i) {
          let rot =
            (((Math.PI * 2) / 3) * i + current / 90 + Math.PI / 6) % p.TWO_PI;
          if (rot > Math.PI) continue;

          p.beginShape();
          p.vertex(200 + Math.cos(rot) * 10, 250);
          p.vertex(200 + Math.cos(rot) * 10, 220);
          p.vertex(200 + Math.cos(rot) * 20, 240);
          p.vertex(200 + Math.cos(rot) * 20, 260);
          p.endShape(p.CLOSE);
        }

        p.pop();

        // initial flash as jump starts
        p.fill(255, Math.max(0, 1 - Math.abs(current - 4530) / 40) * 200);
        p.rect(0, 0, canvasWidth, canvasHeight);

        // overlay entire scene with white during jump
        // p.fill(255, out * 150);
        p.rect(0, 0, canvasWidth, canvasHeight);
      }
    };
    // ... Your mouseWheel, engine, and particle update functions ...
    function mouseWheel(e) {
      // capture scroll event and update raw scroll target
      target = Math.max(
        100,
        Math.min(
          current + 200,
          target + Math.max(-10, Math.min(10, e.delta / 5))
        )
      );
    }
  };

  useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove(); // eslint-disable-next-line
  }, [width, height, isModified, mainObjColor]);

  return (
    <div
      ref={containerRef}
      // style={{ backgroundColor: 'blue', padding: '1rem' }}
    ></div>
  );
}
