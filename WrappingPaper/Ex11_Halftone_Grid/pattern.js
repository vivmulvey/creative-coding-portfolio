/**
 * @Author: viviennemulvey
 * @Date:   2020-11-16T14:43:10+00:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2020-11-23T21:00:28+00:00
 */
class Pattern {

  constructor(_i, _x, _y) {
    this.arrayPosition = _i;
    this.squareSpace = squareSize; //the amount of space given to each pattern on the grid
    this.x = _x; //the x position of the larger square
    this.y = _y; //the y position 4 the larger square
    this.squareSize = 4 //random sizes
    this.squareSizeB = 1;
    this.border = random(0, 3);
  }


  render() {

    let density = color(255, 255, 255);
    density.setAlpha(random(100, 255)); //changing the shading of one colour

    let numOfSmallSquares = 14;

    //creating another grid of squares
    for (let j = 0; j < numOfSmallSquares; j++) {
      for (let i = 0; i < numOfSmallSquares; i++) {
        noStroke();
        fill(255);

        //finding the end point of each square and dividing back to draw each square at a new point
        let transX = this.x + this.squareSpace / numOfSmallSquares * i;
        let transY = this.y + this.squareSpace / numOfSmallSquares * j;
        if (this.arrayPosition % 2 == 0) {
          rect(transX, transY, this.squareSize, this.squareSize , this.border)
        } else {
          rect(transX, transY, this.squareSizeB, this.squareSizeB, this.border)
        }

      }
      this.squareSize -= 0.25;
      this.squareSizeB += 0.25;
    }
  }
}
