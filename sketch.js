let img;
let snowflakes = [];
let bg;

function setup() {
	createCanvas(960, 960);
	img = loadImage("Snow.png");
	bg = loadImage("ccat.jpg");
	image(bg, 0, 0);
	for (let i = 0; i < 1000; i++) {
		snowflakes.push(new SnowFlake({ image: img, size: 15 }));
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
			snowflakes[i] = new SnowFlake({ image: img, size: 15 });
		}
	}
}