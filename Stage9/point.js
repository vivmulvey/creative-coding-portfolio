/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2021-03-04T18:17:26+00:00
 */

//Array for multiple color options
 let randomColors = [
  ['#05CDE5', '#FFB803', '#FF035B', '#3D3E3E', '#D60FFF'],
 
];

let assignColor = randomColors[0];


class Point {

  constructor(_x, _y, _r) {
    this.location = createVector(_x, _y);
    this.radius = _r;
    this.color = assignColor[int(random(0, assignColor.length))];
    this.moveX = random(-0.1, 0.1);
    this.moveY = random(-0.1, 0.1);
    this.velocity = createVector(this.moveX, this.moveY);

  }

  render() {

    fill(this.color);
    noStroke();
    //console.log(this.location.x);
    ellipse(this.location.x, this.location.y, this.radius, this.radius);
  }

  //Checking edges and changing direction if they hit the edge of the canvas
  update() {

    if (this.location.x < 0 + this.radius || this.location.x > windowWidth - this.radius) {

      this.velocity.x = this.velocity.x * -1;
      this.location.x += this.velocity.x;

    } else if (this.location.y < 0 + this.radius || this.location.y > windowHeight - this.radius) {
      this.velocity.y = this.velocity.y * -1;
      this.location.y += this.velocity.y;
    } else {
      this.location.x += this.velocity.x;
      this.location.y += this.velocity.y;
    }
  }
}