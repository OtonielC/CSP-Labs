
//This function will set the variables for the
//paddle and will define its movement and its locaion and color.
function bars(loc, col){
  this.col = col;
  this.loc = loc;


  this.run = function(){
    this.update();
    this.render();
    this.checkEdges();
  }


  this.update = function(){

}



this.checkEdges = function(){
  if(this.loc.x < 0) this.vel.x = -this.vel.x;
  if(this.loc.x > width) this.vel.x = -this.vel.x;
  if(this.loc.y < 0) this.vel.y = -this.vel.y;
  if(this.loc.y > height) this.vel.y = -this.vel.y;
}



//this function will render the shape of the object which will be a square.
  this.render = function(){
    fill(this.col);
    rect(this.loc.x, this.loc.y, 50, 50);
  }
}
