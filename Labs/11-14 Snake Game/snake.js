function Snake(loc, vel){
  this.loc = loc;
  this.vel = vel;
  this.segments = [];
  this.segments.push(createVector(0,0));

  //calls all other functions
  this.run = function(){
    this.update();
    this.render();
  }
//this function should update the snake and should make sure the snake  grows when it eats
//this function should check if the snake is following itself
//if the snake touches itself, the game must end
  this.update = function(){
    this.segments[0].x = this.loc.x;
    this.segments[0].y = this.loc.y;
    this.loc.add(this.vel);
    if(food.iscolliding === true){

    }


    for(var i = this.segments.length-1; i > 0; i--){
      this.segments[i].x = this.segments[i-1].x;
      this.segments[i].y = this.segments[i-1].y;

    }


    this.segments[0].x = constrain(this.segments[0].x, 0, width-w);
    this.segments[0].y = constrain(this.segments[0].y, 0 ,height-w);

  }
//draws the snake and makes it a square
  this.render = function(){
    fill(0,255,0);
    for(var i = 0; i < this.segments.length; i++){
      rect(this.segments[i].x, this.segments[i].y, w, w);
    }

    rect(this.loc.x, this.loc.y, w, w);
  }
}
