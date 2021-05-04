/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2021-03-04T18:17:26+00:00
 */

//Declaring variables
let points = [];
let distance = 45;
let numOfPoints = 100;

let mySound;
let button;
let amp;

var font;

//var slider;

//Preloading the audio file
function preload() {
  soundFormats('mp3');
  mySound = loadSound("Music.mp3");
  font = loadFont('data/FreeSans.otf');
}



function setup() {
  canvas = createCanvas(800, 800);
  background(51);
  mySound = loadSound("Music.mp3", loaded);
  amp = new p5.Amplitude();

  //Looping through the number of points and drawing them randomly
  for (var i = 0; i < numOfPoints; i++) {
    points.push(new Point(random(0, windowWidth), random(0, windowHeight), 2));
  }
  //console.log(points);

  //slider = createSlider(10,100,86)
}

//Creating a gesture to start the audio
function loaded() {
  button = createButton('Play Song');
  button.mousePressed(togglePlaying);
}

//Creating a play/pause button
function togglePlaying() {
  if (!mySound.isPlaying()) {
    mySound.play();
    mySound.setVolume(0.3);
    button.html('Pause Song');
  } else {
    mySound.stop();
    button.html('Play Song');
  }
}



function draw() {

  background(0);

  //Looping through the points [] , setting each point index and drawing them
  //Timing to the audio
    if (mySound.currentTime() > 4) {
      for (let i = 0; i < points.length; i++) {
        //We only need to render the points once
        points[i].render();
        points[i].update();

        for (let j = i + 1; j < points.length; j++) {
          points[j].update();

          //Checking if the points are close enough to attach
          if (dist(points[i].location.x, points[i].location.y, points[j].location.x, points[j].location.y) < distance) {

            for (let k = j + 1; k < points.length; k++) {
              points[k].update();
              //If the points are close enough draw from each point to each point ( creating a triangle)
              if (dist(points[k].location.x, points[k].location.y, points[j].location.x, points[j].location.x) < distance) {
                //console.log("met")
                
                  beginShape();
                  vertex(points[k].location.x, points[k].location.y);
                  vertex(points[j].location.x, points[j].location.y);
                  vertex(points[i].location.x, points[i].location.y);
                  endShape();
              }
            }
          }
        }
      }
    }
  
  let vol = amp.getLevel();

  //Mapping the circle size to the level of volume
  let diam = map(vol, 0, 0.5, 200, 475);
  //Drawing the circle
  fill(255 , 255 , 255 , 50);
  ellipse(width / 4, height / 2, diam, diam);
  //Inner circle
  fill(0);
  ellipse(width / 4, height / 2, 240, 240);

  fill(255 , 255 , 255 , 50);
  ellipse((width / 4) * 3, height / 2, diam, diam);
  //Inner circle
  fill(0);
  ellipse((width / 4) * 3, height / 2, 240, 240);
  

  //Finding the text path and changing it to dots
   let heyGirl = font.textToPoints('Hey Girl', 90, 410, 60);
   let heyBoy = font.textToPoints('Hey Boy', 490, 410, 60);
  // let superStar = font.textToPoints('superstar dj', 235, 425, 60);
  // let here = font.textToPoints('Here We Go', 160, 500, 80);



  for (let i = 0; i < heyGirl.length; i++) {
    let pt = heyGirl[i];
    if (mySound.currentTime() > 20) {
      stroke(255);
      strokeWeight(3);
      point(pt.x, pt.y);
    }
  }
  for (let i = 0; i < heyBoy.length; i++) {
    let pt = heyBoy[i];
    if (mySound.currentTime() > 22) {
      stroke(255);
      strokeWeight(3);
      point(pt.x, pt.y);
    }
  }
  // for (let i = 0; i < superStar.length; i++) {
  //   let pt = superStar[i];
  //   if (mySound.currentTime() > 23.5) {
  //     stroke(255);
  //     strokeWeight(3);
  //     point(pt.x, pt.y);
  //   }
  // }
  // for (let i = 0; i < here.length; i++) {
  //   let pt = here[i];
  //   if (mySound.currentTime() > 25) {
  //     stroke(0,255,0);
  //     strokeWeight(3);
  //     point(pt.x, pt.y);
  //   }
  // }
}