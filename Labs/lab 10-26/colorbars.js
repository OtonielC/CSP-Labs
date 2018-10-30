
//This function will set the variables for the
//paddle and will define its movement and its locaion and color.
function bar(col,loc){
  this.col = col;
  this.loc = loc;


  this.run = function(){
    this.update();
    this.render();
  }


  this.update = function(){

}


//this function will render the shape of the object which will be a square.
  this.render = function(){
    fill(this.col);
    rect(this.loc.x, this.loc.y, 200, 200);
  }
}
