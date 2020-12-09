/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2020-09-23T11:49:53+01:00
 */



function setup(){
  createCanvas(500,500);
  noStroke();
  colorMode(HSB,width,height,100); //500 steps of hue , 500 steps of saturation, 100 steps of bold
  background(0,0,0);
}

function draw(){
  // fill(255,0,0);
  // rect(20,20,50,50);
  // ellipse(120,120,50,50);
  // line(220,220,50,50);

  let stepX = 20;
  let stepY = 20;

for(let gridY = 0; gridY<height; gridY = gridY+stepY){
  for(let gridX = 0; gridX<height; gridX = gridX+stepX){
    fill(gridX,height- gridY ,100);
    rect(gridX,gridY,stepX,stepY);
  }
 }
}
