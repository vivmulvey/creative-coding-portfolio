/**
 * @Author: viviennemulvey
 * @Date:   2020-11-16T14:42:44+00:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2020-11-23T21:03:37+00:00
 */


const width = 800;
const height = 800;


const numberOfBigSquares = 10;

let squareSize = width / numberOfBigSquares;

let patterns = [];

function setup() {

  // let startColor = color(255, 255, 255);
  // let endColor = color(43,96,140);

  createCanvas(width, height);
  //background(lerpColor(startColor, endColor));
  //background(22,59,79);
  background(117, 171, 232);
  rectMode()
  angleMode(DEGREES);
  //colorMode(HSB , 255);
  noLoop();

  for (let y = 0; y < numberOfBigSquares * 2; y++) {
    for (let x = 0; x < numberOfBigSquares * 2; x++) {
      //rotate(90);
      patterns.push(new Pattern(x, x * squareSize, y * squareSize)); //multiplying the square size by the (x,y) and pushing to the patterns array
    }
  }
}


function draw() {
   translate(400, -400);
  rotate(45);
  patterns.forEach(pattern => {
    pattern.render();

  });
}
