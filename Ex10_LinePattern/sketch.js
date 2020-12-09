/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2020-11-03T14:16:24+00:00
 */


let width = 500;
let height = 500;
let numOfObjects = 20;
let size = width / numOfObjects;

function setup() {
  createCanvas(500, 500);
  noStroke();
  colorMode(RGB , 255);
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
      if (direction == 0  ) {
        stroke(0,162,237);
        strokeWeight(5);
        line(0, size, size, 0);
        stroke(255);
        strokeWeight(2);
        line(0, size, size, 0);
      } else {
        stroke(0,162,237);
        strokeWeight(5);
        line(0,0, size ,size);
        stroke(255);
        strokeWeight(2);
        line(0,0, size ,size);
      }
      pop();
    }
  }
}
