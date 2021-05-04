/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2021-03-04T18:17:26+00:00
 */

let mySound;
let button;
let fft;
let volumeHistory = [];

function preload() {
  soundFormats('mp3');
  mySound = loadSound("Bicep.mp3");
}

function setup() {
  canvas = createCanvas(256, 256);
  background(51);
  angleMode(DEGREES);
  mySound = loadSound("Bicep.mp3", loaded);
  fft = new p5.FFT(0 , 256);

}

//Creating a gesture 
function loaded() {
  button = createButton('Play');
  button.mousePressed(togglePlaying);
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



function draw() {
  background(51);

  let spectrum = fft.analyze();
  //console.log(spectrum);
  stroke(255);
  for(let i = 0; i < spectrum.length; i++){
    let amp = spectrum[i];
    console.log(amp)
    let y = map(amp , 0 ,256 ,height ,0);
    line(i , height , i ,y );
  }
}