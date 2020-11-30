function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  if (mouseIsPressed) {
    fill(255);
  } else {
    fill(0);
  }
  ellipse(mouseX, mouseY, 20, 20);
}