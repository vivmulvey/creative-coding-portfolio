/**
 * @Author: viviennemulvey
 * @Date:   2020-11-16T14:42:44+00:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2020-11-16T20:12:39+00:00
 */

let width = 600;
let height = 600;

let minSize = 2;
let maxSize = 10;
let stepSize = maxSize + 2;

let squares = [];
let numOfSquares = 10;




function setup() {
  createCanvas(width, height);
  background(255);
  rectMode(CENTER)
  noLoop();


  for (let j = 0; j < height; j += stepSize) {
    for (let i = 0; i < width; i += stepSize) {
      // console.log(j)
      // console.log(i)
      squares.push(new Square(i, j));
    }
  }
}

function draw() {

  background(255);

  squares.forEach(square => {
    square.render();
  })
}
