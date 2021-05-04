/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2021-01-20T10:35:03+00:00
 */

let xPos;
let yPos;
let diam = 20;
let stepSize = 2;
let optionsX = [-1, 0, 1];
let optionsY = [-1, 0, 1];

function setup() {
  createCanvas(500, 500);
  noStroke();
  colorMode(HSB, width, height, 100); //500 steps of hue , 500 steps of saturation, 100 steps of bold
  background(0, 0, 0);

  xPos = width / 2;
  yPos = height / 2;
}

function draw() {

  let speed = map(mouseX, 0, width, 2, 40);
  let diam = map(mouseY, 0, height, 1, 10);

  for (let x = 0; x < speed; x++) {

    fill(255);
    noStroke();


    let moveX = optionsX[floor(random(0, optionsX.length))] * stepSize;
    let moveY = optionsY[floor(random(0, optionsY.length))] * stepSize;

    xPos += moveX;
    yPos += moveY;

    if (xPos > width) xPos = 0;
    if (yPos > height) yPos = 0;
    if (xPos < 0) xPos = width;
    if (yPos < 0) yPos = height;


    ellipse(xPos, yPos, diam, diam);

  }


}

function keyPressed() {

  if (key == 's' || key == 'S') {
    saveCanvas(gd.timestamp(), 'png') //saveCanvas takes an image and attachs filename + type (jpg or png)
  }

  if (key == '1') {
    //drawMode = 1;
    stepSize = 1;
    diameter = 1;
  }
  if (key == '2') {
    //drawMode = 2;
    stepSize = 1;
    diameter = 1;
  }
  if (key == '3') {
    //drawMode = 3;
    stepSize = 10;
    diameter = 5;
  }
}
