/**
 * @Author: viviennemulvey
 * @Date:   2020-11-16T14:43:10+00:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2020-11-24T19:56:28+00:00
 */
class Pattern4 {

  constructor(_i, _x, _y) {
    this.arrayPosition = _i;
    this.squareSpace = squareSize; //the amount of space given to each pattern on the grid
    this.x = _x; //the x position of the larger square
    this.y = _y; //the y position 4 the larger square
    this.squareSize = 2 //random sizes

    this.border = random(0, 4);
  }


  render() {

    let density = color(255, 255, 255);
    density.setAlpha(random(100, 155)); //changing the shading of one colour LIGHT settings
    //density.setAlpha(random(75, 125)); //changing the shading of one colour DARK settings

    let numOfSmallSquares = 10;

    fill(8, 74, 151);
    rect(this.x, this.y, this.squareSpace, this.squareSpace);

    //creating another grid of squares
    for (let j = 0; j < numOfSmallSquares; j++) {
      for (let i = 0; i < numOfSmallSquares; i++) {
        noStroke();
        fill(255);

        //finding the end point of each square and dividing back to draw each square at a new point
        if (this.arrayPosition % 2 == 0) {
          let transX = this.x + this.squareSpace / numOfSmallSquares * j;
          let transY = this.y + this.squareSpace / numOfSmallSquares * i;
          rect(transX, transY, this.squareSize, this.squareSize, this.border)
        } else {
          let transX = this.x + this.squareSpace / numOfSmallSquares * i;
          let transY = this.y + this.squareSpace / numOfSmallSquares * j;
          rect(transX, transY, this.squareSize, this.squareSize, this.border)
        }

      }

      this.squareSize += 1

    }

  }
}
