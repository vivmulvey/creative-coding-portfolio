/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2020-11-03T14:50:18+00:00
 */


let width = 500;
let height = 500;
let numOfObjects = 20;
let size = width / numOfObjects;

function setup() {
  createCanvas(500, 500);
  noStroke();
  colorMode(RGB,numOfObjects,numOfObjects,numOfObjects);
  rectMode(CENTER);
  background(0);
  //noLoop();

}

function draw() {

  randomSeed(56); //fixes the pattern on x seed
  background(0);

  for (let j = 0; j < numOfObjects; j++) {
    for (let i = 0; i < numOfObjects; i++) {
      let transX = i * size;
      let transY = j * size;
      push();
      translate(transX, transY);
      let direction = round(random(0, 1));
      //console.log(direction)
      if (direction == 0) {
        beginShape(TRIANGLES);
        fill(j,numOfObjects-j,numOfObjects-i);
        vertex(0, 0);
        vertex(size, 0);
        vertex(0, size);
        fill(i,numOfObjects-j*2,numOfObjects-i*2);
        vertex(size, 0);
        vertex(size, size);
        vertex(0, size);
        endShape();

      } else {
        stroke(i,numOfObjects-j,numOfObjects-j);
        strokeWeight(2);
        line(0, 0, size, size);

      }
      pop();
    }
  }
}
