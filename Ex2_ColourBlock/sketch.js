/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2020-09-29T15:14:36+01:00
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

  //Generating a shape with a number of vertex points 
  fill(255,0,0);
  stroke(0);
    beginShape();
      for(let i=0; i<5; i++){
        let vx = i*20;
        let vy = random(10,100)*30;
        vertex(vx,vy);
      }
  endShape(CLOSE);

  let stepX = 10;
  let stepY = 10;

for(let gridY = 0; gridY<height; gridY = gridY+stepY){
  for(let gridX = 0; gridX<height; gridX = gridX+stepX){
    fill(gridX,height- gridY ,100);
    rect(gridX,gridY,stepX,stepY);
  }
 }
}

function keyPressed(){
  if(key=='s' || key=='S'){
    saveCanvas (gd.timestamp() , 'png') //saveCanvas takes an image and attachs filename + type (jpg or png)
  }
}
