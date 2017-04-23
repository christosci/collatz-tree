var angle, len, nums;
var angleSlider, lenSlider, rotSlider, startN, endN, numCheckBox;
var xOrig = 300;
var yOrig = 500;

function setup() {
	setupControls();
	createCanvas(1000, 600);
	noLoop();
}

function draw() {
	nums = [];
	len = lenSlider.value();
	background(51);
	angle = angleSlider.value();
	stroke(255);
	textSize(10);
	translate(xOrig, yOrig);
	rotate(rotSlider.value());
	collatz(int(startN.value()));
}

function collatz(n) {
	if (nums.indexOf(n) == -1 && n <= int(endN.value())) {
		if (n != 1) {
			line(0, 0, len, 0);
			translate(len, 0);
		}
		if (numCheckBox.checked())
			drawNumbers(n);

		append(nums, n);
		if ((n-1) % 3 == 0 && n != 1) {
			push();
			doRotation(true);
			collatz((n-1)/3);
			pop();
		}
		push();
		doRotation(false);
		collatz(n*2);
		pop();
	}
}

function doRotation(odd) {
	if (odd) 
		rotate(angle);
	else
		rotate(-angle);
}

function drawNumbers(n) {
	noStroke();
	fill(0, 255, 0);
	text(n, 0, 0)
	stroke(255);
}