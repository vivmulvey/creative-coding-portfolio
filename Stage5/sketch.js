/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2021-03-04T18:17:26+00:00
 */

let points = [];
let distance = 50;
let numOfPoints = 10;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  background(51);

  for (var i = 0; i < numOfPoints; i++) {
    points.push(new Point(random(0, windowWidth), random(0, windowHeight), 3));
  }
}

function draw() {


  for (let i = 0; i < points.length; i++) {
    let point1 = points[i];
    point1.render();
    //point1.update();

    for (let j = 0; j < points.length; j++) {
      let point2 = points[j];
      //point2.update();
      if (dist(point1.position.x, point1.position.y, point2.position.x, point2.position.y) < distance) {

        for (let k = 0; k < points.length; k++) {
          let point3 = points[k];
          //point3.update();
          if (dist(point3.position.x, point3.position.y, point2.position.x, point2.position.x) < distance) {
            beginShape();
            vertex(point3.position.x, point3.position.y);
            vertex(point2.position.x, point2.position.x, );
            vertex(point2.position.x, point1.position.x, );
            endShape();
          }
        }
      }
    }
  }
}