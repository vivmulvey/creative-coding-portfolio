/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2020-10-07T11:17:42+01:00
 */

 let numOfSegments;
 let stepAngle;
 let radius;
 let startColour;
 let endColour;
 let rotationAngle;


function setup(){
  createCanvas(500,500);
  noStroke();
  colorMode(HSB,360,100,100); //500 steps of hue , 500 steps of saturation, 100 steps of bold
  background(0,0,0);
  angleMode(DEGREES); //allows us to use cos/tan/sin without Math.
}


function draw(){
  numOfSegments = 12;
  stepAngle = 360/numOfSegments;
  radius = 200;
  startColour = color(50,100,100);
  endColour = color(255,100,100);
  rotationAngle = int(map(mouseY,0,height,0,numOfSegments));
  //console.log(rotationAngle)

  background(125);
  push();
    translate(250,250);
    rotate(rotationAngle * stepAngle);
    beginShape(TRIANGLE_FAN);
    vertex(0,0); //gives us the midpoint of the circle and we add the radius to get each outer point
      for(let a=0; a<=360; a+= stepAngle){ // <= gives us a full circle
        let vx = (radius * cos(a)) ;
        let vy = (radius * sin(a)) ;
        fill(lerpColor(startColour,endColour,a/360));
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
