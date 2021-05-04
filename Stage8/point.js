/**
 * @Author: viviennemulvey
 * @Date:   2020-09-23T09:26:27+01:00
 * @Last modified by:   viviennemulvey
 * @Last modified time: 2021-03-04T18:17:26+00:00
 */



class Point{

constructor(_x ,_y, _r){
  this.location = createVector(_x,_y);
  this.radius = _r;
  this.moveX = random(-0.01,0.01);
  this.moveY = random(-0.01,0.01);
  this.velocity = createVector(this.moveX , this.moveY);
}

render(){

  let randomColors = [
    ['#05CDE5', '#FFB803', '#FF035B', '#3D3E3E', '#D60FFF'],
   
  ];

  let assignColor = randomColors[0];
  
  fill(assignColor[int(random(0, assignColor.length))]);
  noStroke();
  //console.log(this.location.x);
  ellipse(this.location.x, this.location.y, this.radius, this.radius );
}

 update(){
        
  if(this.location.x < 0 + this.radius || this.location.x > windowWidth - this.radius ){
    
      this.velocity.x = this.velocity.x * -1;
      this.location.x += this.velocity.x;
      
  }
  
  else if(this.location.y < 0 + this.radius || this.location.y > windowHeight - this.radius ){
      this.velocity.y = this.velocity.y * -1;
      this.location.y += this.velocity.y;
  }
  else {
    this.location.x += this.velocity.x;
    this.location.y += this.velocity.y;
  }
 }
}

