let img;
let snowflakes = [];
let bg;

function setup() {
  createCanvas(2040, 2040);
  img = loadImage("balloons.png");
  bg = loadImage("Adathink.png");
  image(bg, 0, 0);
  for (let i = 0; i < 50; i++) {
    snowflakes.push(new SnowFlake({ image: img, size: 70 }));
  }
}

function draw() {
  background(255);
  image(bg, 0, 0);
  console.log(bg.width, bg.height);
  for (let i = 0; i < snowflakes.length; i++) {
    let snow = snowflakes[i];
    if (snow.inScreen()) {
      snow.draw();
    } else {
      snowflakes[i] = new SnowFlake({ image: img, size: 70 });
    }
  }
}
