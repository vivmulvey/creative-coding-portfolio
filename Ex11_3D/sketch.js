/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2020-11-10T14:11:16+00:00
 */


let width = 500;
let height = 500;
let numOfObjects = 3;
let angle = 10;
let pattern;


function setup() {
  createCanvas(500, 500 ,WEBGL);
  pattern = createGraphics(200,200);
  //noStroke();
  //colorMode(RGB,numOfObjects,numOfObjects,numOfObjects);
  //rectMode(CENTER);
  background(0);
  //noLoop();

}

function draw() {

  background(0);
  pattern.fill(255,0,0)
  // for(let i = 0; i < numOfObjects; i++){
  //   let transX = i * 100 ;
  //   let transY = i * 100 ;
  push();
  //translate(transX,transY);
  //texture(pattern);
  rotateX(angle);
  rotateY(angle);
  rotateZ(angle);
  box(100);
  //angle+=0.02
  pop();
//}

}
