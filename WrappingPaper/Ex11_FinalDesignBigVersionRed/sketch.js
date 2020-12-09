/**
 * @Author: viviennemulvey
 * @Date:   2020-11-16T14:42:44+00:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2020-11-24T16:56:20+00:00
 */


const width = 1754;
const height = 2481;


const numberOfBigSquares = 10;

let squareSize = width / numberOfBigSquares;

let patterns = [];

function setup() {

  // let startColor = color(255, 255, 255);
  // let endColor = color(43,96,140);

  createCanvas(width, height);
  //background(lerpColor(startColor, endColor));
  //background(22,59,79);
  background(117, 171, 232); //light blue
  //background(0, 0, 128); //dark blue
  rectMode()
  angleMode(DEGREES);
  //colorMode(HSB , 255);
  noLoop();

  for (let y = 0; y < numberOfBigSquares * 2; y++) {
    for (let x = 0; x < numberOfBigSquares * 2; x++) {
      let randomNum = random(0, 10);
      if (randomNum <= 2) {
        patterns.push(new Pattern(x, x * squareSize, y * squareSize)); //multiplying the square size by the (x,y) and pushing to the patterns array
      } else if (randomNum > 2 && randomNum <= 4) {
        patterns.push(new Pattern1(x, x * squareSize, y * squareSize));
      } else if (randomNum > 4 && randomNum <= 6) {
        patterns.push(new Pattern2(x, x * squareSize, y * squareSize));
      } else if (randomNum > 6 && randomNum <= 8) {
        patterns.push(new Pattern3(x, x * squareSize, y * squareSize));
      } else {
        patterns.push(new Pattern4(x, x * squareSize, y * squareSize));
      }
    }
  }
}


function draw() {
  translate(900, -900);
  rotate(45);
  patterns.forEach(pattern => {
    pattern.render();

  });
}
