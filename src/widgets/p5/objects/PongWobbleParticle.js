function Wobble(x, y, fsize, p) {
  this.location = p.createVector(x, y);
  this.velocity = p.createVector(p.random(1), p.random(1));
  this.scale = p.random(0.35, 0.9);
  this.radius = p.floor((this.scale * fsize) / 6);
  // this.r = 24;
}

// Wobble.prototype.behaviors = function (
//   canvasCorrection,
//   mouseCorrection,
//   p5,
//   p,
// ) {
//   // let seek = this.seek(this.target, p5);
//   let arrive = this.arrive(this.target, p5, p);
//   let mouse = p.createVector(
//     p.mouseX - canvasCorrection,
//     p.mouseY - mouseCorrection,
//   );
//   let flee = this.flee(mouse, p5, p);

//   arrive.mult(0.9);
//   flee.mult(3);

//   this.applyForce(arrive);
//   this.applyForce(flee);
// };

// Wobble.prototype.applyForce = function (f) {
//   this.acc.add(f);
// };
Wobble.prototype.update = function (width, list, p) {
  this.location.add(this.velocity);
  if (
    list[
      p.floor(this.location.y) * width +
        p.floor(this.location.x + this.velocity.x)
    ] === 1 ||
    list[
      p.floor(this.location.y) * width +
        p.floor(this.location.x - this.velocity.x)
    ] === 1
  ) {
    this.velocity.x *= -1;
  }
  if (
    list[
      p.floor(this.location.y + this.velocity.y) * width +
        p.floor(this.location.x)
    ] === 1 ||
    list[
      p.floor(this.location.y - this.velocity.y) * width +
        p.floor(this.location.x)
    ] === 1
  ) {
    this.velocity.y *= -1;
  }
};

// Wobble.prototype.flee = function (mouse, p5, p) {
//   let desired = p5.Vector.sub(mouse, this.pos);
//   let dist = desired.mag();
//   if (dist < 30) {
//     desired.setMag(this.maxSpeed);
//     desired.mult(-1);
//     let steer = p5.Vector.sub(desired, this.vel);
//     steer.limit(this.maxForce);
//     return steer;
//   } else {
//     return p.createVector(0, 0);
//   }
// };

// Wobble.prototype.arrive = function (target, p5, p) {
//   let desired = p5.Vector.sub(target, this.pos);
//   let dist = desired.mag();
//   let speed = this.maxSpeed;
//   if (dist < 100) {
//     speed = p.map(dist, 0, 100, 0, this.maxSpeed);
//   }
//   desired.setMag(speed);
//   let steer = p5.Vector.sub(desired, this.vel);
//   steer.limit(this.maxForce);
//   return steer;
// };

Wobble.prototype.display = function (p) {
  p.fill(this.location.x % 255, 255, 230);
  p.ellipse(this.location.x, this.location.y, this.radius, this.radius);
};
Wobble.prototype.display2 = function (p) {
  p.fill(this.location.x % 255, 255, 230);
  p.ellipse(this.location.x, this.location.y, this.radius, this.radius);
};
// Wobble.prototype.show = function (
//   pt,

//   p,
// ) {
//   // p.stroke(mainObjColor);
//   // p.stroke(this.i / widthOfText, 200, 255);
//   p.stroke(this.i, 200, 255);
//   // p.stroke(this.i / widthOfText, 200, 255);
//   p.strokeWeight(this.r);
//   p.point(this.pos.x, this.pos.y);
// };
export { Wobble };
