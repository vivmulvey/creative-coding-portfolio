/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2020-10-20T14:12:54+01:00
 */




function setup(){
  createCanvas(500,500);
  //noStroke();
  colorMode(HSB,360,100,100); //500 steps of hue , 500 steps of saturation, 100 steps of bold
  background(0,0,0);

}


function draw(){

  background(255);

  let startColor = color(100,100,100);
  let endColor = color(255,100,100);

  translate(width/2 , height/2);

  let segments = map(mouseY,0,height,2,100);
  let angle = TAU / segments;
  let radius = mouseX - width / 2;

  strokeWeight(mouseY / 20);

  for (let i = 0; i <= segments; i++) {
    let x = cos(angle * i) * radius;
    let y = sin(angle * i) * radius;
    stroke(lerpColor(startColor,endColor,i/segments));
    line(0, 0, x, y);
  }
}

function keyPressed(){
  if(key=='s' || key=='S'){
    saveCanvas (gd.timestamp() , 'png') //saveCanvas takes an image and attachs filename + type (jpg or png)
  }
}
