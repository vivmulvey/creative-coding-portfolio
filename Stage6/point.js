/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2021-03-04T18:17:26+00:00
 */



class Point{
constructor(_x ,_y, _r){
  this.location = createVector(_x,_y);
  //console.log(this.location.x);
  this.radius = _r;
  this.moveX = random(-0.1,0.1);
  this.moveY = random(-0.1,0.1);
  this.velocity = createVector(this.moveX , this.moveY);
  //console.log(this.velocity);
}

render(){
  
  fill(255,0,0);
  noStroke();
  //console.log(this.location.x);
  ellipse(this.location.x, this.location.y, this.radius, this.radius );
}

update(){
  
  if(dist(this.location.x , this.location.y , 0 , 0) > 200){
    this.velocity * -1;
    this.location.x += this.velocity.x;
    this.location.y += this.velocity.y;
  }
  else{
    
    this.location.x += this.velocity.x;
    this.location.y += this.velocity.y;
  }
 }
}

