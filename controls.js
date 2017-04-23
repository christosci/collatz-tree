function setupControls() {
	var nLabel = createElement('label', 'Starting and ending n values:');
	var angleLabel = createElement('label', 'Branch Angle:');
	var lenLabel = createElement('label', 'Branch length:');
	var rotLabel = createElement('label', 'Rotation:');

	// HTML elements
	startN = createInput('1');
	endN = createInput('256');
	angleSlider = createSlider(0, PI / 4, PI / 12, 0.01);
	lenSlider = createSlider(1, 40, 20, 1);
	rotSlider = createSlider(0, TWO_PI, PI / 4, 0.01);
	numCheckBox = createCheckbox('Show Numbers');

	// Position
	nLabel.position(1100, 20);
	startN.position(1100, 60);
	endN.position(1300, 60);
	angleLabel.position(1100,180)
	angleSlider.position(1100, 220);
	lenLabel.position(1100, 260);
	lenSlider.position(1100, 300);
	rotLabel.position(1100, 340);
	rotSlider.position(1100, 380);
	numCheckBox.position(1100, 420);

	// Callback
	startN.input(redraw);
	endN.input(redraw);
	angleSlider.input(redraw);
	lenSlider.input(redraw);
	rotSlider.input(redraw);
	numCheckBox.changed(redraw);
}

function keyPressed() {
	var offset = 50;
	if (keyIsDown(LEFT_ARROW))
		xOrig -= offset;
	if (keyIsDown(RIGHT_ARROW))
		xOrig += offset;
	if (keyIsDown(UP_ARROW))
		yOrig -= offset;
	if (keyIsDown(DOWN_ARROW))
		yOrig += offset;
	redraw();
}