/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2021-01-20T09:33:55+00:00
 */

let xPos;
let yPos;
let stepSize = 5;


function setup(){
  createCanvas(500,500);
  noStroke();
  colorMode(HSB,width,height,100); //500 steps of hue , 500 steps of saturation, 100 steps of bold
  background(0,0,0);

  xPos = width/2;
  yPos = height/2;
}

function draw(){

  fill(255);
  noStroke();
  let randomNumX = round(random(-1,1));
  let randomNumY = round(random(-1,1));
  let moveX = randomNumX + stepSize;
  let moveY = randomNumY + stepSize;
  xPos += moveX;
  yPos += moveY;

  ellipse(xPos, yPos , 10 ,10);


}

function keyPressed(){
  if(key=='s' || key=='S'){
    saveCanvas (gd.timestamp() , 'png') //saveCanvas takes an image and attachs filename + type (jpg or png)
  }
}
