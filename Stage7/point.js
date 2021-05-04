/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2021-03-04T18:17:26+00:00
 */



class Point{
constructor(x ,y, r){
  this.position = createVector(x,y);
  this.radius = 3;
  //this.colour = c;
  this.moveX = random(-0.1,0.1);
  this.moveY = random(-0.1,0.1);
  this.velocity = 1;
}

render(){
  fill(255,0,0);
  noStroke();
  ellipse(this.position.x, this.position.y, this.radius * 2)
}

// update(){
//   if(dist(this.position.x , this.position.y , 0 , 0) > this.radius){
//     this.velocity * (-1);
//     this.position += this.velocity;
//   }
//   else{
//     this.position += this.velocity;
//   }
//  }

update(){
  this.position += this.velocity;
}
}

