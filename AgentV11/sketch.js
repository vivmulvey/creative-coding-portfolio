/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2021-03-01T19:51:13+00:00
 */

let width = 740;
let height = 500;

let circles = [];
let numOfCircles = 10;

let minRadius = 10;
let maxRadius = 20;
let circle;


function setup() {
  createCanvas(width, height);
  background(0);
}


function draw() {
  noLoop();

  //Looping through the circles
  while (circles.length < numOfCircles) {
    circle = new Circle(random(width), random(height), random(minRadius, maxRadius));
    //console.log(circles.length)
    //console.log("working")

    //Looping through circles and setting each circle in the array to otherCircle
    //Checking the distance between the currentCircle and circle[i] for overlap
    let overlapping = false;
    let counter = 0;
    for (let i = 0; i < circles.length; i++) {
      let otherCircle = circles[i];
      let distance = dist(circle.position.x, circle.position.y, otherCircle.position.x, otherCircle.position.y);
      if (distance < circle.radius + otherCircle.radius) {
        //overlapping
        overlapping = true;
      }
    }

    if (!overlapping) {
      circles.push(circle);
    }

    counter++
    if (counter > 1000) {
      break;
    }
  }


  circles.forEach(circle => {
    circle.render();
    circle.grow();
  });

}
