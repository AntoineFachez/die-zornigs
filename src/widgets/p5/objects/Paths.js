function StraightPath(x1, y1, x2, y2, r, p, p5) {
  this.start = p.createVector(x1, y1);
  this.end = p.createVector(x2, y2);
  this.r = 20;
}

StraightPath.prototype.show = function (p) {
  p.push();
  p.stroke(40);
  p.strokeWeight(this.r * 5);
  p.line(this.start.x, this.start.y, this.end.x, this.end.y);
  p.pop();
  p.push();
  p.stroke(70);
  p.strokeWeight(2);
  p.line(this.start.x, this.start.y, this.end.x, this.end.y);
  p.pop();
  return;
};
export { StraightPath };
