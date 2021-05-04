/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2021-03-04T18:17:26+00:00
 */

//Using currentTime and cue

let mySound;
let button;


function preload() {
  soundFormats('mp3');
  mySound = loadSound("Bicep.mp3");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  background(0, 0, 255);
  angleMode(DEGREES);
  mySound = loadSound("Bicep.mp3", loaded);

  mySound.addCue(5, changeColour);

}

function changeColour() {
  background(255, 0, 0)

}

//Creating a gesture 
function loaded() {
  button = createButton('Play');
  button.mousePressed(togglePlaying);
}

function draw() {
  //background(mySound.currentTime()*10, 0 , 255);


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