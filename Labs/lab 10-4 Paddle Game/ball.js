
//This function will set the variables for the
//ball and will define its movement and its locaion and color.
function ball (loc, vel, acc, col, rad){





  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }
//this function will create updates to the balls and eventually
//the code will be able to detect when the balls touch the Paddle
//and then the balls will reset and multiply
  this.update = function(){




}
//the check edges function will set the speed and will also make sure that the balls
//dont exit the area that the game is playing in.
  this.checkEdges = function(){
    if(this.locX < 0) this.speedX = -this.speedX;
    if(this.locX > width) this.speedX = -this.speedX;
    if(this.locY < 0) this.speedY = -this.speedY;
    if(this.locY > height) this.speedY = -this.speedY;
  }
//this function will render the shape of the object which will be a ball or an ellipse.
  this.render = function(){
    fill(this.col);
    ellipse(this.locX, this.locY, rad, rad);
  }
}
