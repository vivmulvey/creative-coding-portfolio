/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2021-02-03T09:38:01+00:00
 */

 let width = 500;
 let height = 500;
 let xPos = width/2;
 let yPos = height/2;
 let angle = 15;
 let radius = 150;

 function setup() {
   createCanvas(width, height);
   //background(0, 0, 0);

   let points = [];
   push();
   translate(width/2,height/2);
   for(i = 0; i < 360; i+=angle){
    let position = createVector(cos(i) * radius , sin(i) * radius);
    points.push(position)
    //console.log(points);
    strokeWeight(10);
    point(position.x , position.y);

   }
   pop();

 }


 function draw() {


 }
