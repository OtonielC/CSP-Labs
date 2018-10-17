
//This function will set the variables for the
//paddle and will define its movement and its locaion and color.
function Paddle(loc, col){
  this.col = color(255,0,0);
  this.loc = loc;
  wid = 140;
  hei = 30;
  this.run = function(){
    this.update();
    this.render();
  }
//this function will create updates to the paddle and eventually
//the code will be able to detect when the Paddle touches the balls
//and then the paddle will reset.
//i wil also lerp the paddle to the mouse so the locations are the same but lagged.
  this.update = function(){
       var mouseloc = createVector(mouseX, 600);
       this.loc = p5.Vector.lerp(this.loc, mouseloc, .2);
}

//this function will render the shape of the object which will be a paddle or a rectangle.
  this.render = function(){
    fill(this.col);
    rect(this.loc.x, this.loc.y, 140, 30);
  }
}
