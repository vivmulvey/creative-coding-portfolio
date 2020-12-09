/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2020-10-05T14:41:32+01:00
 */

 let numOfSegments;
 let stepAngle;
 let radius;


function setup(){
  createCanvas(500,500);
  noStroke();
  colorMode(HSB,360,100,100); //500 steps of hue , 500 steps of saturation, 100 steps of bold
  background(0,0,0);
  angleMode(DEGREES); //allows us to use cos/tan/sin without Math.
}


function draw(){
  numOfSegments = 16;
  stepAngle = 360/numOfSegments;
  radius = 150;
  background(125);
  //fill(255,0,0);
  //stroke(0);
  push();
    translate(250,250);
    rotate(45);
    beginShape(TRIANGLE_FAN);
    vertex(0,0); //gives us the midpoint of the circle and we add the radius to get each outer point
      for(let a=0; a<=360; a+= stepAngle){ // <= gives us a full circle
        let vx = (radius * cos(a)) ;
        let vy = (radius * sin(a)) ;
        fill(a,100,100);
        vertex(vx,vy); //adding a vertex point
      }
  endShape();
  pop();
}

function keyPressed(){
  if(key=='s' || key=='S'){
    saveCanvas (gd.timestamp() , 'png') //saveCanvas takes an image and attachs filename + type (jpg or png)
  }
}
