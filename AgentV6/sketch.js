/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2021-02-05T16:28:39+00:00
 */

let width = 500;
let height = 500;
let radius = 150;
let numOfPoints = 25;
let points = [];

function setup() {
  createCanvas(width, height);
  background(0, 0, 0);

  let angle = radians(360 / numOfPoints);
  for (i = 0; i < numOfPoints; i++) {
    let xPos = cos(angle * i) * radius;
    let yPos = sin(angle * i) * radius;
    points.push(createVector(xPos, yPos));
  }

}


function draw() {
  background(0, 0, 0);
  noFill();
  stroke(255);
  push();
  translate(width / 2, height / 2);
  beginShape();

  //first point / control point
  curveVertex(points[points.length - 1], points[points.length - 1].y);

  // points
  for (i = 0; i < points.length - 1; i++) {
    curveVertex(points[i].x, points[i].y);
  }

  //end point / control point
  curveVertex(points[0].x, points[0].y);

  curveVertex(points[1].x, points[1].y);

  endShape();
  pop();

  points[5].x += 1

}
