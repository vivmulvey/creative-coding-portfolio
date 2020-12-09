/**
 * @Author: viviennemulvey
 * @Date:   2020-11-16T14:43:10+00:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2020-11-24T22:19:40+00:00
 */
class Pattern3 {

  constructor(_i, _x, _y) {
    this.arrayPosition = _i;
    this.squareSpace = squareSize; //the amount of space given to each pattern on the grid
    this.x = _x; //the x position of the larger square
    this.y = _y; //the y position 4 the larger square
    this.squareSize = 14 //random sizes

    this.border = random(0, 4);
  }


  render() {


    fill(166, 125, 1);
    rect(this.x, this.y, this.squareSpace, this.squareSpace);

    let numOfSmallSquares = 9;

    //creating another grid of squares
    for (let j = 0; j < numOfSmallSquares; j++) {
      for (let i = 0; i < numOfSmallSquares; i++) {
        noStroke();
        fill(248, 240, 201);

        //finding the end point of each square and dividing back to draw each square at a new point
        let transX = this.x + this.squareSpace / numOfSmallSquares * i;
        let transY = this.y + this.squareSpace / numOfSmallSquares * j;
        rect(transX, transY, this.squareSize, this.squareSize, this.border)


      }
      //this.squareSize += 1

    }

  }
}
