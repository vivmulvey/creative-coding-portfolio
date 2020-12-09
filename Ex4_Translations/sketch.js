/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2020-09-30T10:27:27+01:00
 */


function setup(){
  createCanvas(500,500);
  noStroke();
  colorMode(HSB,360,100,100); //500 steps of hue , 500 steps of saturation, 100 steps of bold
  background(0,0,0);
  angleMode(DEGREES); //allows us to use cos/tan/sin without Math.
}


function draw(){
  background(125);
  fill(255,0,0);
  //rotate(20);
  rect(100,100,100,100);
  push();
    translate(200,200);
    rect(100,100,100,100);
  pop();


}

function keyPressed(){
  if(key=='s' || key=='S'){
    saveCanvas (gd.timestamp() , 'png') //saveCanvas takes an image and attachs filename + type (jpg or png)
  }
}
