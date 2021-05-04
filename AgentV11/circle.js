/**
 * @Author: viviennemulvey
 * @Date:   2021-02-24T17:03:05+00:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2021-03-01T20:16:38+00:00
 */

//Creating the circle class
class Circle {
  constructor(x, y, r) {
    this.position = createVector(x, y);
    this.radius = r;
    this.growing = true;
  }

  render() {
    fill(0);
    //stroke(random(255), random(255), random(255));
    stroke(255);
    ellipse(this.position.x, this.position.y, this.radius * 2);

  }

  grow() {
    this.radius = this.radius + 1;
  }

}
