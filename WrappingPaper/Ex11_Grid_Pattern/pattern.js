/**
 * @Author: viviennemulvey
 * @Date:   2020-11-16T14:43:10+00:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2020-11-23T16:11:15+00:00
 */
class Pattern {

  constructor(_x, _y) {
    this.squareSpace = squareSize; //the amount of space given to each pattern on the grid
    this.x = _x; //the x position of the larger square
    this.y = _y; //the y position of the larger square
    this.squareSize = random(2, 12) //random sizes
    this.border = random(0, 3);
  }


  render() {

    // let startColor = color(94, 173, 242);
    // let endColor = color(49, 121, 245);

    let density = color(255, 255, 255);
    density.setAlpha(random(100, 255)); //changing the shading of one colour

    let numOfSmallSquares = 6;

    //creating another grid of squares
    for (let j = 0; j < numOfSmallSquares; j++) {
      for (let i = 0; i < numOfSmallSquares; i++) {
        noStroke();
        //fill(lerpColor(startColor, endColor, i / 10))
        // if (this.squareSize < 4 || this.squareSize > 11) {
        //   fill(density);
        // } else if((this.squareSize > 5 || this.squareSize < 8)) {
        //     fill(lerpColor(endColor, startColor, i / 10))
        // } else{
        //   fill(lerpColor(startColor, endColor, i / 10))
        // }
        fill(density);


        //finding the end point of each square and dividing back to draw each square at a new point
        let transX = this.x + this.squareSpace / numOfSmallSquares * i;
        let transY = this.y + this.squareSpace / numOfSmallSquares * j;
        rect(transX, transY, this.squareSize, this.squareSize, this.border)
      }
    }
  }
}
