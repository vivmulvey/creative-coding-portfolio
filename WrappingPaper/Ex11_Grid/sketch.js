/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2020-11-10T17:30:34+00:00
 */


let width = 600;
let height = 600;
let numOfObjects = 10;
let size = width / numOfObjects;
let count = 0;

function setup() {
  createCanvas(width, height);
  //noStroke();
  //colorMode(RGB);
  rectMode(CENTER);
  background(255);
  noLoop();

}

function draw() {

  //background(0);
  for (let j = 0; j < numOfObjects; j++) {
    for (let i = 0; i < numOfObjects; i++) {

      let transX = i * size + size / 2;
      let transY = j * size + size / 2;

      let boxColor = color(180, 90, 155);
      boxColor.setAlpha(random(255));

      push();
      translate(transX, transY);
      rotate(15);
      fill(boxColor);
      if (i % 2 == 0) {
        rect(i, j, size, size);
      } else
        ellipse(i, j, size, size);
      pop();
    }
  }
}
