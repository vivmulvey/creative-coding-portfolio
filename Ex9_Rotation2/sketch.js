/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2020-10-28T10:05:19+00:00
 */


let width = 500;
let height = 500;
let numOfObjects = 20;
let size = width / numOfObjects;


function setup() {
  createCanvas(width, height);
  rectMode(CENTER);
  //noStroke();
  colorMode(RGB, numOfObjects, numOfObjects, numOfObjects); 
  background(0, 0, 0);

}


function draw() {

  background(0);
  for (let j = 0; j < numOfObjects; j++) {
    for (let i = 0; i < numOfObjects; i++) {
      let transX = i * size + size / 2;
      let transY = j * size + size / 2;
      push();
      translate(transX, transY);

      let rotateValue = atan2(mouseY - transY, mouseX - transX);
      let distance = dist(mouseX, mouseY, transX, transY);
      let scaleValue = map(distance, 0, 500, 5, 25);

      rotate(rotateValue);
      stroke(i, numOfObjects-i, numOfObjects - j);
      noFill();
      ellipse(0, 0,  scaleValue,  scaleValue);

      fill(255);
      ellipse(10, 0, size / 5, size / 5);
      pop();

    }
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') {
    saveCanvas(gd.timestamp(), 'png') //saveCanvas takes an image and attachs filename + type (jpg or png)
  }
}
