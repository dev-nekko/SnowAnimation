function mapNumber(num, min, max, newMin, newMax) {
  const normal = (num - min) / (max - min);
  return normal * (newMax - newMin) + newMin;
}

class SnowFlake {
  constructor(opts) {
    this.width = 1200;
    this.height = 200;

    this.position = createVector(
      mapNumber(random(), 0, 1, 0, this.width),
      mapNumber(random(), 0, 1, 0, this.height)
    );

    this.image = opts.image;
    this.size = opts.size;
    this.Xoffset = mapNumber(random(), 0, 1, 0, this.width);
    this.Yoffset = mapNumber(random(), 0, 1, 0, this.height);
  }
}

SnowFlake.prototype.draw = function () {
  image(this.image, this.position.x, this.position.y, this.size, this.size);
  this.position.x += mapNumber(noise(this.Xoffset), 1, 0, 0, 2);
  this.position.y += mapNumber(noise(this.Yoffset), 1, 0, -2, 2);
  this.Xoffset += 0.0001;
  this.Yoffset += 0.0001;
};

SnowFlake.prototype.inScreen = function () {
  if (this.position.x < 0 || this.position.x > this.width) {
    return false;
  }
  if (this.position.y < 0 || this.position.y > this.height) {
    return false;
  }
  return true;
};
