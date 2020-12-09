/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2020-11-10T20:20:36+00:00
 */


let width = 500;
let height = 500;
let numOfObjects = 45;
let rows = width / numOfObjects;
let cols = height / numOfObjects;
let r = 0.2; //starting radius
let r1 = 4.7;




  function setup() {
    createCanvas(500, 500);
    noStroke();
    //colorMode(RGB,numOfObjects,numOfObjects,numOfObjects);
    rectMode(CENTER);
    background(0);
    noLoop();

  }

function draw() {

  let rotateValue = 45;

  background('#000000');


  for (i = rows/2 ; i < width; i += rows) {
    for (j = cols/2 ; j < height; j += cols) {
      //otate(rotateValue)
      let xPos = map(i,0,width,0,width/2);
      fill('#E563B3');
      noStroke();
      rect(xPos, j, r, r);


      let xPos1 = map(i,0,width,width/2,width);
      fill('#FFFFE0');
      noStroke();
      rect(xPos1, j, r1, r1);
    }
    r += 0.1; //gradually getting fatter
    r1 -= 0.1
  }
  //console.log(r);
}
