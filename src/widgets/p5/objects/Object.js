function Object(
  i,
  type,
  objectMode,
  posX,
  posY,
  width,
  height,
  content,
  color,
  p
) {
  this.i = i;
  this.type = type;
  this.posX = posX;
  this.posY = posY;
  this.width = width;
  this.height = height;
  this.content = content;
  this.color = color;
}
Object.prototype.show = function (
  i,
  type,
  posX,
  posY,
  width,
  height,
  color,
  p
) {
  p.fill(this.color);
  if (type === "text") {
    p.textSize(40);
    p.textWrap(p.WORD);
    p[this.type](
      this.content,
      posX - p.textWidth(this.content) / 2,
      this.posY,
      this.width,
      this.height,
      this.objectMode
    );
  } else {
    p[this.type](
      this.posX,
      this.posY,
      this.width,
      this.height,
      this.objectMode
    );
  }
};
Object.prototype.update = function (
  i,
  type,
  posX,
  posY,
  width,
  height,
  color,
  p
) {
  if (type === "text") {
    p.textSize(40);
    p.textWrap(p.WORD);
    p[this.type](
      this.content,
      posX - p.textWidth(this.content) / 2,
      this.posY,
      this.width,
      this.height,
      this.objectMode
    );
  } else {
    p.fill(color);
    p[this.type](
      this.posX,
      this.posY,
      this.width,
      this.height,
      this.objectMode
    );
  }
};
export default Object;
