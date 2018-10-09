
//This function will set the variables for the
//paddle and will define its movement and its locaion and color.
function Paddle (locX, locY){
  this.locX = locX;
  this.locY = locY;




  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }
//this function will create updates to the paddle and eventually
//the code will be able to detect when the Paddle touches the balls
//and then the paddle will reset.
//i wil also lerp the paddle to the mouse so the locations are the same but lagged.
  this.update = function(){


}
//the check edges function will set the speed and will also make sure that the paddle
//doesn't exit the area that the game is playing in.
  this.checkEdges = function(){
    if(this.locX < 0) this.speedX = -this.speedX;
    if(this.locX > width) this.speedX = -this.speedX;
    if(this.locY < 0) this.speedY = -this.speedY;
    if(this.locY > height) this.speedY = -this.speedY;
  }
//this function will render the shape of the object which will be a paddle or a rectangle.
  this.render = function(){
    fill(this.col);
    rect(this.locX, this.locY, 40, 60);
  }
}
