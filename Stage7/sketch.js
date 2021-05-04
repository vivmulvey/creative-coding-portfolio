/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2021-03-04T18:17:26+00:00
 */

var font;
var path;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();

  opentype.load('data/FreeSans.otf', function(err, f) {
    if (err) {
      print(err);
    } else {
      font = f;
      var fontPath = font.getPath("Hey Boy", 0, 0, 300);
      path = new g.Path(fontPath.commands);
      loop();
    }
  });
  
  
}

function wobble(x, y, distortion, time) {
  var offsetX = distortion * (noise(3*x, 3*y, time) - 0.5);
  var offsetY = distortion * (noise(3*x, 3*y, 1000 + time) - 0.5);
  return [x + offsetX, y + offsetY];
}

var time = 0;
function draw() {
  if (!path) return;
  
  background(255);

  // Move the pen down and to the right
  translate(60, 460);

  var distortion = mouseX / 5;
  time += mouseY / 5000;

  noFill();
  stroke(0); // black
  var shapeOpened = false;
  var lastVertex = null;
  path.commands.forEach(c => {
    if (c.type == 'M') { // Move
      if (shapeOpened) {
        endShape();
      }
      shapeOpened = true;
      beginShape();
      vertex(...wobble(c.x, c.y, distortion, time));
      lastVertex = [c.x, c.y];

    } else if (c.type == 'C') { // Curve
      // The last vertex is the first endpoint
      bezierVertex(
        ...wobble(c.x1, c.y1, distortion, time), // First control point
        ...wobble(c.x2, c.y2, distortion, time), // Second control point
        ...wobble(c.x, c.y, distortion, time) // Second endpoint
      );
      lastVertex = [c.x, c.y];

    } else if (c.type == 'L') { // Line
      // For a straight line:
      //vertex(...wobble(c.x, c.y, distortion, time));
      
      // Make a straight line as a Bezier path so that
      // the control points can wobble
      bezierVertex(
        ...wobble(
            lerp(lastVertex[0], c.x, 0.1),
            lerp(lastVertex[1], c.y, 0.1),
            distortion,
            time), // First control point
        ...wobble(
            lerp(lastVertex[0], c.x, 0.9),
            lerp(lastVertex[1], c.y, 0.9),
            distortion,
            time), // Second control point
        ...wobble(c.x, c.y, distortion, time) // Second endpoint
      );
      lastVertex = [c.x, c.y];

    } else if (c.type == 'Z') { // Connect to start
      endShape(CLOSE);
      shapeOpened = false;
    }
  });
  if (shapeOpened) endShape();
}