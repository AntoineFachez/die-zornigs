function Confetti(x, y, r, c, p, p5) {
  this.x = x;
  this.y = y;
  this.homeX = x;
  this.home = y;
  this.r = r;
  this.c = c;
}

Confetti.prototype.update = function () {
  // this.vel.add(this.acc);
  // this.vel.limit(this.maxSpeed);
  // this.pos.add(this.vel);
  // this.acc.set(0, 0);
};

Confetti.prototype.show = function (p) {
  p.stroke(
    p.random(30, 200),
    p.random(30, 200),
    p.random(30, 200),
    p.random(150, 255)
  );
  p.strokeWeight(1);
  p.fill(
    p.random(100, 255),
    p.random(100, 255),
    p.random(100, 255),
    p.random(150, 255)
  );
  p.push();
  p.translate(this.x, this.y);
  // p.rotate(this.vel.heading());
  // p.triangle(-this.r, -this.r / 2, -this.r, this.r / 2, this.r, 0);
  p.circle(0, 0, p.random(this.r / 2, this.r));
  p.pop();
};

Confetti.prototype.edges = function (width, height, p) {
  if (this.x > width + this.r) {
    this.x = -this.r;
  } else if (this.x < -this.r) {
    this.x = width + this.r;
  }
  if (this.y > height + this.r) {
    this.y = -this.r;
  } else if (this.y < -this.r) {
    this.y = height + this.r;
  }
};

export { Confetti };
