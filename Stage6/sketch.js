/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2021-03-04T18:17:26+00:00
 */

let points = [];
let distance = 50;
let numOfPoints = 200;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight) / 2;
  background(51);

  //Looping through the number of points and drawing them randomly
  for (var i = 0; i < numOfPoints; i++) {
    points.push(new Point(random(0, windowWidth), random(0, windowHeight), 20));
  }
  console.log(points);
}

function draw() {

   background(51);
  // translate(width/2, height/2);
  // push();
  // fill(0);
  // stroke(0,50);
  // ellipse(0,0,400,400);
  // pop();

  //Looping through the points [] , setting each point index and drawing them
  for (let i = 0; i < points.length; i++) {
    points[i].render();
    points[i].update();

    for (let j = i+1; j < points.length; j++) {
      points[j].update();
      
      if (dist(points[i].location.x, points[i].location.y, points[j].location.x, points[j].location.y) < distance) {

        for (let k = j+1; k < points.length; k++) {
          points[k].update();
          if (dist(points[k].location.x, points[k].location.y, points[j].location.x, points[j].location.x) < distance) {
            //console.log("met")
            beginShape();
            vertex(points[k].location.x, points[k].location.y);
            vertex(points[j].location.x, points[j].location.y);
            vertex(points[i].location.x, points[i].location.y);
            endShape();
          }
        }
      }
    }
  }
}