/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2020-10-12T20:31:49+01:00
 */



function setup(){
  createCanvas(500,500);
  noStroke();
  colorMode(HSB,width,height,100); //500 steps of hue , 500 steps of saturation, 100 steps of bold
  background(0,0,0);
}



function draw(){

  background(127);

  let startColor = color(200,100,100);
  let endColor = color(255,100,100);


  for(let x = 0; x<10; x++){
    fill(lerpColor(startColor,endColor,x/10));
    rect(x*50,100,50,50);

    }
}



function keyPressed(){
  if(key=='s' || key=='S'){
    saveCanvas (gd.timestamp() , 'png') //saveCanvas takes an image and attachs filename + type (jpg or png)
  }
}
