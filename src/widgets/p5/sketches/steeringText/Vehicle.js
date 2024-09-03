function Vehicle(i, x, y, p, p5, canvasWidth, canvasHeight, points) {
  this.i = i;
  // this.pos = p.createVector(x, y);
  this.pos = p.createVector(p.random(canvasWidth), p.random(canvasHeight));
  this.target = p.createVector(x, y);
  // this.vel = p.createVector();
  this.vel = p5.Vector.random2D();
  this.acc = p.createVector();
  this.r = 5;
  // this.color = color;
  this.maxSpeed = 10;
  this.maxForce = 0.2;
  this.length = points.length;
  // this.r = 24;
}

// console.log('text', this.color);
Vehicle.prototype.behaviors = function (
  canvasCorrection,
  mouseCorrection,
  p5,
  p
) {
  // let seek = this.seek(this.target, p5);
  let arrive = this.arrive(this.target, p5, p);
  let mouse = p.createVector(
    p.mouseX - canvasCorrection,
    p.mouseY - mouseCorrection
  );
  let flee = this.flee(mouse, p5, p);

  arrive.mult(0.9);
  flee.mult(3);

  this.applyForce(arrive);
  this.applyForce(flee);
};

Vehicle.prototype.applyForce = function (f) {
  this.acc.add(f);
};
Vehicle.prototype.update = function () {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
};

Vehicle.prototype.flee = function (mouse, p5, p) {
  let desired = p5.Vector.sub(mouse, this.pos);
  let dist = desired.mag();
  if (dist < 30) {
    desired.setMag(this.maxSpeed);
    desired.mult(-1);
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);
    return steer;
  } else {
    return p.createVector(0, 0);
  }
};

Vehicle.prototype.arrive = function (target, p5, p) {
  let desired = p5.Vector.sub(target, this.pos);
  let dist = desired.mag();
  let speed = this.maxSpeed;
  if (dist < 100) {
    speed = p.map(dist, 0, 100, 0, this.maxSpeed);
  }
  desired.setMag(speed);
  let steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxForce);
  return steer;
};

Vehicle.prototype.show = function (
  pt,

  p
) {
  const hue = ((360 * this.i) / this.length) % 360; // Map index to hue (0-360)
  const saturation = 200; // Adjust as needed
  const brightness = 200; // Adjust as needed

  p.stroke(hue, saturation, brightness);
  p.strokeWeight(this.r);
  p.point(this.pos.x, this.pos.y);
  // p.stroke(mainObjColor);
  // p.stroke(this.i / widthOfText, 200, 255);
  // p.stroke(this.i + 170, 213, 230);
  // // p.stroke(this.i / widthOfText, 200, 255);
  // p.strokeWeight(this.r);
  // p.point(this.pos.x, this.pos.y);
};
export default Vehicle;
