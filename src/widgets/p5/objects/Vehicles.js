function findProjectionOnPath(pos, a, b, p5) {
  let v1 = p5.Vector.sub(a, pos);
  let v2 = p5.Vector.sub(b, pos);
  v2.normalize();
  let sp = v1.dot(v2);
  v2.mult(sp);
  v2.add(pos);
  return v2;
}

function Vehicle(x, y, r, p, p5) {
  this.pos = p.createVector(x, y);
  this.vel = p.createVector(0, 0);
  this.acc = p.createVector(0, 0);
  this.maxSpeed = 8;
  this.maxForce = 0.1;
  this.r = r;
  this.wanderTheta = p.PI / 2;
}
Vehicle.prototype.seek = function (target, p, p5) {
  let force = p5.Vector.sub(target.pos, this.pos);
  force.setMag(this.maxSpeed);
  force.sub(this.vel);
  force.limit(this.maxForce);
  return force;
};
Vehicle.prototype.flee = function (target, p, p5) {
  return this.seek(target, p, p5).mult(-1);
};

Vehicle.prototype.pursue = function (vehicle, p, p5) {
  let target = vehicle.pos.copy();
  let prediction = vehicle.vel.copy();
  prediction.mult(10);
  target.add(prediction);
  p.fill("#ff0000");
  p.circle(target.x, target.y, 16);
  return this.seek(vehicle, p, p5);
};
Vehicle.prototype.evade = function (vehicle, p, p5) {
  let pursuit = this.pursue(vehicle, p, p5);
  pursuit.mult(-1);
  return pursuit;
};
Vehicle.prototype.arrive = function (target, p, p5) {
  let force = p5.Vector.sub(target.pos, this.pos);
  let r = 100;
  let d = force.mag();
  let m = p.map(d, 0, r, 0, this.maxSpeed);
  if (d < r) {
    force.setMag(m);
  } else {
    force.setMag(this.maxSpeed);
  }
  force.sub(this.vel);
  force.limit(this.maxForce);
  return force;
};
Vehicle.prototype.wander = function (p, p5) {
  let wanderPoint = this.vel.copy();
  wanderPoint.setMag(100);
  wanderPoint.add(this.pos);
  // p.fill(255, 0, 0);
  // p.noStroke();
  // p.circle(wanderPoint.x, wanderPoint.y, 8);

  let wanderRadius = 50;
  // p.noFill();
  // p.stroke(255);
  // p.strokeWeight(0.7);
  // p.circle(wanderPoint.x, wanderPoint.y, wanderRadius * 2);
  // p.line(this.pos.x, this.pos.y, wanderPoint.x, wanderPoint.y);

  let theta = this.wanderTheta + this.vel.heading();

  let x = wanderRadius * p.cos(theta);
  let y = wanderRadius * p.sin(theta);
  wanderPoint.add(x, y);
  // p.fill("#ff0000");
  // p.noStroke();
  // p.circle(wanderPoint.x, wanderPoint.y, 8);

  // p.stroke(255);
  // p.line(this.pos.x, this.pos.y, wanderPoint.x, wanderPoint.y);

  let steer = wanderPoint.sub(this.pos);
  steer.setMag(this.maxForce);
  this.applyForce(steer);

  let displaceRange = 0.3;
  this.wanderTheta += p.random(-displaceRange, displaceRange);
};
Vehicle.prototype.applyForce = function (force) {
  this.acc.add(force);
};

Vehicle.prototype.followPath = function (path, p, p5) {
  // Step 1: calculate future position
  let future = this.vel.copy();
  future.mult(20);
  future.add(this.pos);
  p.fill("#0000ff");
  p.noStroke();
  p.circle(future.x, future.y, 16);

  // Step 2: Is future on path?
  let target = findProjectionOnPath(path.start, future, path.end, p5);

  p.fill("#00ff00");
  p.noStroke();
  p.circle(target.x, target.y, 16);

  let d = p5.Vector.dist(future, target);

  if (d > path.r) {
    return this.seek({ pos: target }, p, p5);
  } else {
    return p.createVector(0, 0);
  }
};
Vehicle.prototype.update = function () {
  this.vel.add(this.acc);
  this.vel.limit(this.maxSpeed);
  this.pos.add(this.vel);
  this.acc.set(0, 0);
};

Vehicle.prototype.show = function (p) {
  p.stroke(255);
  p.strokeWeight(2);
  p.fill(255);
  p.push();
  p.translate(this.pos.x, this.pos.y);
  p.rotate(this.vel.heading());
  p.triangle(-this.r, -this.r / 2, -this.r, this.r / 2, this.r, 0);
  p.pop();
};

Vehicle.prototype.edges = function (width, height, p) {
  if (this.pos.x > width + this.r) {
    this.pos.x = -this.r;
  } else if (this.pos.x < -this.r) {
    this.pos.x = width + this.r;
  }
  if (this.pos.y > height + this.r) {
    this.pos.y = -this.r;
  } else if (this.pos.y < -this.r) {
    this.pos.y = height + this.r;
  }
};

function Target(x, y, r, p, p5) {
  Vehicle.call(this, x, y, r, p, p5);
  this.vel = p5.Vector.random2D();
  this.vel.mult(15);
  this.maxSpeed = 12;
}
Target.prototype = Object.create(Vehicle.prototype);

Target.prototype.constructor = Target;

Target.prototype.show = function (p) {
  p.stroke(255);
  p.strokeWeight(2);
  p.fill("#ff0000");
  p.push();
  p.translate(this.pos.x, this.pos.y);
  p.rotate(this.vel.heading());
  p.triangle(-this.r, -this.r / 2, -this.r, this.r / 2, this.r, 0);
  p.pop();
  // p.push();
  // p.translate(this.pos.x, this.pos.y);
  // p.circle(0, 0, this.r * 2);
  // p.pop();
};
export { Vehicle, Target };
