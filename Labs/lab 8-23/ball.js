function ball (locX, locY, rad){
  this.speedX = random(-3.0, 3.0);
  this.speedY = random(-3.0, 3.0);
  this.locX = locX;
  this.locY = locY;
  this.rad = rad;
  this.col = color(random(255),random(255),random(255));
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }
  this.update = function(){
    this.locX = this.locX + this.speedX;
    this.locY = this.locY + this.speedY;
  }
  this.checkEdges = function(){
    if(this.locX < 0) this.speedX = -this.speedX;
    if(this.locX > width) this.speedX = -this.speedX;
    if(this.locY < 0) this.speedY = -this.speedY;
    if(this.locY > height) this.speedY = -this.speedY;
  }
  this.render = function(){
    fill(this.col);
    ellipse(this.locX, this.locY, rad, rad);
  }
}
