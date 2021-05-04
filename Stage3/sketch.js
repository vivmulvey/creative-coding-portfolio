/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2021-03-04T18:17:26+00:00
 */

//Using the amplitude of sound to create circle using sin and cos

let mySound;
let button;
let amp;
let volumeHistory = [];
let radius = 100;

function preload() {
  soundFormats('mp3');
  mySound = loadSound("Bicep.mp3");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  background(51);
  angleMode(DEGREES);
  mySound = loadSound("Bicep.mp3", loaded);
  amp = new p5.Amplitude();

}

//Creating a gesture 
function loaded() {
  button = createButton('Play');
  button.mousePressed(togglePlaying);
}

function draw() {
  background(51);

  //Getting the volume level of the music
  let vol = amp.getLevel();
  //console.log(vol)
  volumeHistory.push(vol);
  stroke(255);
  noFill();

  translate(width / 2, height / 2);
  beginShape();
  for (let i = 0; i < 360; i++) {
    let radius = map(volumeHistory[i], 0, 1, 200, 300);
    let x = radius * cos(i);
    let y = radius * sin(i);
    vertex(x, y);

  }
  endShape();

  //Modidies the array values
  if (volumeHistory.length > 360) {
    volumeHistory.splice(0, 1);
  }

}

//Creating a pause version of the button if the music is already playing
function togglePlaying() {
  if (!mySound.isPlaying()) {
    mySound.play();
    mySound.setVolume(0.3);
    button.html('Pause');
  } else {
    mySound.stop();
    button.html('Play');
  }
}