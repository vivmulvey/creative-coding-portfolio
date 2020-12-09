/**
 * @Author: viviennemulvey
 * @Date:   2020-11-16T14:43:10+00:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2020-11-17T14:40:35+00:00
 */
class Square {

  constructor(xPos ,yPos) {
    this.size = random(minSize, maxSize);
    this.x = xPos;
    this.y = yPos;
    this.border = random(0,5);

  }

  render() {

    noStroke();

    let density = color(0,0,0);
    density.setAlpha(random(100,255));

    fill(density);
    rect(this.x, this.y, this.size, this.size , this.border);

  }
}
