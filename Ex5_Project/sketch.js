/**
 * @Author: viviennemulvey
 * @Date:   2020-10-05T14:44:05+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2020-10-14T09:22:14+01:00
 */



function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  colorMode(HSB, 360, 100, 100); //500 steps of hue , 500 steps of saturation, 100 steps of bold
  noStroke();
}



function draw() {
  background(240);

  let angle = TWO_PI * (0.001 * frameCount); //speed of rotation
  let translate1 = 25; //distance between each block of circles

  let rotate1 =  5 * (0.001 * frameCount); //x rotation   dividing - makes it get smaller
  let rotate2 = 5 / (0.001 * frameCount); //y rotation

  let startColor = color(255, 100, 100);
  let endColor = color(100, 100, 100);



    translate(width / 2, height / 2); //to the middle of the screen

    for (let i = 0; i < 16; i++) {
      push();
      rotate(angle + TWO_PI * i / 16); // /16 - creates 16 in a row
      translate(translate1, 0);
      fill(lerpColor(startColor, endColor, i / 10));
      ellipse(rotate1, rotate2, 5 * (i / 10), 5 * (i / 10));  // divie by i/10 to create different sizes

      translate(translate1, 0);
      ellipse(rotate1, rotate2, 10 * (i / 11), 10 * (i / 11));

      translate(translate1, 0);
      ellipse(rotate1, rotate2, 20 * (i / 12), 20 * (i / 12));

      translate(translate1, 0);
      ellipse(rotate1, rotate2, 25 * (i / 13), 25 * (i / 13));

      translate(translate1, 0);
      ellipse(rotate1, rotate2, 30 * (i / 14), 30 * (i / 14));

      pop();
    }

    // if(mouseIsPressed) {
    //   startColor = color(random(360), 100,100);
    //   endColor = color(random(360),100,100);
    // }

  }


// function mousePressed() {
//   startColor = color(random(360), 100, 100);
//   endColor = color(random(360), 100, 100);
// }
