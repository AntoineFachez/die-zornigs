function Boid(width, height, x, y, r, p, p5) {
  //   this.x = x;
  //   this.y = y;
  this.r = r;
  this.pos = p.createVector(p.random(width), p.random(height));
  this.vel = p5.Vector.random2D();
  this.vel.setMag(p.random(0, 4));
  this.acc = p.createVector();
  this.maxForce = 1;
  this.maxSpeed = 5;
}
Boid.prototype.edges = function (width, height, p, p5) {
  if (this.pos.x >= width + this.r) {
    this.pos.x = -this.r;
  } else if (this.pos.x <= -this.r) {
    this.pos.x = width + this.r;
  }
  if (this.pos.y >= height + this.r) {
    this.pos.y = -this.r;
  } else if (this.pos.y <= -this.r) {
    this.pos.y = height + this.r;
  }
};
Boid.prototype.update = function (vector, p, p5) {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.vel.limit(this.maxSpeed);
  this.acc.mult(0);
};
Boid.prototype.show = function (vector, p, p5) {
  p.fill("#d3d3d350");
  p.stroke(80);
  p.strokeWeight(2);
  //   p.circle(this.pos.x, this.pos.y, this.r);
  p.circle(this.pos.x, this.pos.y, this.r);
};
Boid.prototype.align = function (boids, p, p5) {
  let perceptionRadius = 25;
  let steering = p.createVector();
  let total = 0;
  for (let other of boids) {
    let d = p.dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
    if (other !== this && d < perceptionRadius) {
      steering.add(other.vel);
      total++;
    }
  }
  if (total > 0) {
    steering.div(total);
    steering.setMag(this.maxSpeed);
    steering.sub(this.vel);
    steering.limit(this.maxForce);
  }
  return steering;
};
Boid.prototype.cohesion = function (boids, p, p5) {
  let perceptionRadius = 50;
  let steering = p.createVector();
  let total = 0;
  for (let other of boids) {
    let d = p.dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
    if (other !== this && d < perceptionRadius) {
      steering.add(other.pos);
      total++;
    }
  }
  if (total > 0) {
    steering.div(total);
    steering.sub(this.pos);
    steering.setMag(this.maxSpeed);
    steering.sub(this.vel);
    steering.limit(this.maxForce);
  }
  return steering;
};
Boid.prototype.separation = function (boids, p, p5) {
  let perceptionRadius = 50;
  let steering = p.createVector();
  let total = 0;
  for (let other of boids) {
    let d = p.dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
    if (other != this && d < perceptionRadius) {
      let diff = p5.Vector.sub(this.pos, other.pos);
      diff.div(d * d);
      steering.add(diff);
      total++;
    }
  }
  if (total > 0) {
    steering.div(total);
    steering.setMag(this.maxSpeed);
    steering.sub(this.velocity);
    steering.limit(this.maxForce);
  }
  return steering;
};
Boid.prototype.flock = function (boids, p, p5) {
  let alignment = this.align(boids, p, p5);
  let cohesion = this.cohesion(boids, p, p5);
  let separation = this.separation(boids, p, p5);

  // alignment.mult(alignSlider.value());
  // cohesion.mult(cohesionSlider.value());
  // separation.mult(separationSlider.value());

  this.acc.add(alignment);
  this.acc.add(cohesion);
  this.acc.add(separation);
};
export { Boid };
