const getRandomSize = (p5) => {
  let r = p5.pow(p5.random(0.4, 1), 5);
  return p5.constrain(r * 30, 1, 30);
  // let r = p5.randomGaussian() * 2;
  // return p5.constrain(p5.abs(r * r), 2, 36);
  // while (true) {
  //   let r1 = p5.random(1);
  //   let r2 = p5.random(1);
  //   if (r2 > r1) {
  //     return r1 * 20;
  //   }
  // }
};

class Vehicle {
  constructor(sx, sy, design, p5) {
    this.p = p5;
    this.img = design;
    // let x = sx || this.p.random(sx);
    // let y = this.p.random(-100, -10);
    this.pos = this.p.createVector(sx, sy);
    this.vel = this.p.createVector(0, 0);
    this.acc = this.p.createVector();

    this.r = getRandomSize(this.p);
    this.angle = this.p.random(this.p.TWO_PI);
    this.dir = this.p.random(1) > 0.5 ? 1 : -1;
    this.xOff = 0;
    // this.p.stroke(this.p.random(160, 255) + (this.r * this.r) / 10);
    // + this.p.constrain(255 / this.r, 80, 100)
  }

  randomize(sx, sy, p) {
    let x = this.p.random(sx);
    let y = this.p.random(-100, -10);
    // let x = this.p.random(sx);
    // let y = this.p.random(-100, -10);
    this.pos = this.p.createVector(x, y);
    this.vel = this.p.createVector(0, 0);
    this.acc = this.p.createVector();
    // this.r = this.p.random(4, 16);
    this.r = getRandomSize(this.p);
  }
  applyForce(force) {
    //Parallax effect hack
    let f = force.copy();
    f.mult(this.r);
    // let f = force.copy();
    // f.div(this.mass);
    this.acc.add(f);
  }

  update(sx, sy, p) {
    this.xOff = this.p.sin(this.angle) * 0.7 * this.r;
    this.vel.add(this.acc);
    this.vel.limit(this.r * 0.2);
    if (this.vel.mag() < 0.9) {
      this.vel.normalize();
    }
    this.pos.add(this.vel);
    this.acc.mult(0);

    if (this.pos.y > p.height + this.r) {
      this.randomize(sx, sy, p);
    }

    //Wrappping left and right
    if (this.pos.x < -this.r) {
      this.pos.x = p.width + this.r;
    }
    if (this.pos.x > p.width + this.r) {
      this.pos.x = -this.r;
    }

    this.angle += (this.dir * this.vel.mag()) / 150;
  }

  render(p) {
    p.push();
    p.translate(this.pos.x + this.xOff, this.pos.y);
    p.rotate(this.angle);
    p.imageMode(p.CENTER);
    p.image(this.img, 0, 0, this.r, this.r);
    p.pop();

    // this.p.strokeWeight(this.r);
    // this.p.stroke(60 + (this.r * this.r * this.r) / 20);

    // this.p.point(this.pos.x, this.pos.y);
  }
  offScreen(sx, sy) {
    return (
      this.pos.y > sy + this.r ||
      this.pos.x < -this.r ||
      this.pos.x > sx + this.r
    );
  }
}

export default Vehicle;
