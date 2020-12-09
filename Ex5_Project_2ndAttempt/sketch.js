/**
 * @Author: viviennemulvey
 * @Date:   2020-10-05T14:44:05+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2020-10-13T21:01:24+01:00
 */


function setup() {
  createCanvas(500, 500);
  //colorMode(HSB, 360, 100, 100); //500 steps of hue , 500 steps of saturation, 100 steps of bold
  stroke(0);
  frameRate(2);
}

const gridCols = 20;
const gridRows = 20;
let gridWidth;
let gridHeight;

let primaryColors = [
  ['#1975d1', '#ff3200', '#ffff1a']
];
let secondaryColors = [
  ['#008000', '#b800e6', '#ff9900']
];
let tertiaryColors = [
  ['#80ff00', '#ffcc00', '#ff704d' , '#b30059' , '#6600ff' , '#00e6b8']
];
let randomColors = [
  ['#ce559c', '#fb4fbe', '#c75f52', '#4E8098', '#90C2E7'],
  ['#2274A5', '#8303f2', '#a04d8d', '#636ffa', '#632B30'],
  ['#8C8F96', '#4A525A', "#24272B", "#1C1C21", "#07070A"]
];

let assignColor = randomColors[0];




function draw() {

  let gridWidth = height / gridCols;
  let gridHeight = width / gridRows;

  for (let i = 0; i < gridRows; i++) {
    for (let j = 0; j < gridCols; j++) {

      fill(assignColor[int(random(0, assignColor.length))]);
      rect(j * gridWidth, i * gridHeight, gridWidth, gridHeight);

    }
  }

  if((keyIsPressed == true) && (key == 'p')){
    assignColor = primaryColors[int(random(0, primaryColors.length))];
    //return false;
  }
  if((keyIsPressed == true) && (key == 's')){
    assignColor = secondaryColors[int(random(0, secondaryColors.length))];
    //return false;
  }
  if((keyIsPressed == true) && (key == 't')){
    assignColor = tertiaryColors[int(random(0, tertiaryColors.length))];
    //return false;
  }
  if((keyIsPressed == true) && (key == 'r')){
    assignColor = randomColors[int(random(0, randomColors.length))];
    //return false;
  }
}
