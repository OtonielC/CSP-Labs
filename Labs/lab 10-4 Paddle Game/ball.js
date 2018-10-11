
//This function will set the variables for the
//ball and will define its movement and its locaion and color.
function ball (loc, vel, col, rad){
      this.loc = loc;
      this.vel = vel;
      this.col = col;
      this.rad = rad;
      this.acc = createVector(0,.1);
//these are all of the functions being called by one function to
//not have to call every single function individually
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }
//this function will create updates to the balls and eventually
//the code will be able to detect when the balls touch the Paddle
//and then the balls will reset and multiply
  this.update = function(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);

}
//the check edges function will set the speed and will also make sure that the balls
//dont exit the area that the game is playing in.
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }
//this function will render the shape of the object which will be a ball or an ellipse.
  this.render = function(){
    fill(this.col);
    ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
  }
}
