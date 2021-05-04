/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2021-02-02T20:48:47+00:00
 */


 let stepSize = 1;
 let angle = 90;
 let angleCount = 3;
 let width = 500;
 let height = 500;
 let xPos = width/2;
 let yPos = height/2;

 function setup() {
   createCanvas(width, height);
   background(0, 0, 0);
 }


 function draw() {

   let speed = map(mouseX,0,width, 2, 10)

   for (let i = 0; i < speed; i++)
   {
     stroke(255);
     strokeWeight(10);
     point(xPos,yPos);

     xPos += cos(radians(angle)) * stepSize;
     yPos += sin(radians(angle)) * stepSize;

     if(xPos < 0 || xPos > width || yPos < 0 || yPos > height){
       angle = getRandomAngle()
     }

   }
 }

 function getRandomAngle(){

   //adding 0.5 so when we floor the number we get 6 numbers
   let randomAngle = (floor(random(-angleCount , angleCount)) * 0.5 ) * 90 / angleCount;
   console.log(randomAngle)

   if(yPos < 0 ){
     return randomAngle + 90;
   }
   if(yPos > height ){
     return randomAngle - 90;
   }
   if(xPos > width ){
     return randomAngle + 180;
   }
   if(xPos < 0 ){
     return randomAngle;
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
