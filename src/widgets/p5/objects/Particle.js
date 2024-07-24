function Particle(x, y, c, p) {
  this.x = x;
  this.y = y;
  this.c = c;
  this.homeX = x;
  this.homeY = y;
}

Particle.prototype.update = function (p) {
  // mouse

  let mouseD = p.dist(this.x, this.y, p.mouseX, p.mouseY);
  let mouseA = p.atan2(this.y - p.mouseY, this.x - p.mouseX);

  // home
  let homeD = p.dist(this.x, this.y, this.homeX, this.homeY);
  let homeA = p.atan2(this.homeY - this.y, this.homeX - this.x);

  // forces
  let mouseF = p.constrain(p.map(mouseD, 0, 100, 80, 40), 0, 20);
  let homeF = p.map(homeD, 0, 100, 0, 40);

  let vx = p.cos(mouseA) * mouseF;
  vx += p.cos(homeA) * homeF;

  let vy = p.sin(mouseA) * mouseF;
  vy += p.sin(homeA) * homeF;

  this.x += vx;
  this.y += vy;
};

Particle.prototype.show = function (res, p) {
  // p.stroke(
  //   p.random(30, 200),
  //   p.random(30, 200),
  //   p.random(30, 200),
  //   p.random(150, 255)
  // );
  // p.strokeWeight(1);
  // p.fill(
  //   p.random(100, 255),
  //   p.random(100, 255),
  //   p.random(100, 255),
  //   p.random(150, 255)
  // );
  p.fill(this.c);
  p.ellipse(this.x, this.y, res, res);
};

Particle.prototype.edges = function (width, height, p) {
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

export { Particle };
