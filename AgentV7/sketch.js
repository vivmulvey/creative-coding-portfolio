/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2021-02-23T14:16:31+00:00
 */

//declaring variables
let width = 500;
let height = 500;
let circles = [];
let radius = 25;
let currentCircle;
let distance;
let destination;
let amt = 0;
//let canSpawn;

function setup() {
  createCanvas(width, height);
  background(255);

  //centre circle
  circles.push(createVector(width / 2, height / 2));
  //the first circle
  destination = circles[0];
  //random position on the canvas
  currentCircle = createVector(random(0, width), random(0, height));

}


function draw() {
  //noLoop();
  background(0);

  //checking if distance of currentCircle to the destination circle is greater then the size of the circle (not touching) then run atach()
  //else if theyre overlapping ...
  if (currentCircle.dist(destination) > radius / 2 + radius / 2) {
    attach();
  } else {
    circles.push(currentCircle);
    currentCircle = createVector(random(0, width), random(0, height));
    // for(let i = 0; i < circles.length; i++){
    //   if(currentCircle.dist(circles[i]) < radius){
    //     canSpwan = false;
    //     currentCircle = createVector(random(0, width), random(0, height));
    //   }
    // }

    amt = 0;
    destination = findClosestCircle();
  }

  //creating the circles
  for (let i = 0; i < circles.length; i++) {
    fill(255);
    ellipse(circles[i].x, circles[i].y, radius, radius);
  }


}

//moving from vector 1 ( currentCircle ) to vector 2 ( destination circle) at the speed of amt
//setting the current circle to move to the centre and drawing to screen
function attach() {
  currentCircle = p5.Vector.lerp(currentCircle, destination, amt);
  ellipse(currentCircle.x, currentCircle.y, radius, radius);
  amt += 0.001;
}



function findClosestCircle() {
  let closestDist = 500;
  let closestCircle;

 //Looping through each circle in the array , checking if the curernt circle drawn's distance to the circle in the array is less than 500
 //Setting the closest distance to the current circle and the circle in the array
 //Setting the closest circle to the circle in the array
 //Giving back the closest circle
  circles.forEach(circle => {
    if (currentCircle.dist(circle) < closestDist) {
      closestDist = currentCircle.dist(circle);
      closestCircle = circle;
    }
  });

  return closestCircle;

}
