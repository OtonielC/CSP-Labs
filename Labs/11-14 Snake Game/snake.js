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
    this.loc.x = constrain(this.loc.x, 0, width-w);
    this.loc.y = constrain(this.loc.y, 0 ,height-w);
    this.segments[0].x = this.loc.x;
    this.segments[0].y = this.loc.y;
    this.loc.add(this.vel);
    if(food.iscolliding === true){
      this.segments+=1
    }

//this starts from the end of the segments array so that each segments follows the head
    for(var i = this.segments.length-1; i > 0; i--){
      this.segments[i].x = this.segments[i-1].x;
      this.segments[i].y = this.segments[i-1].y;
    }



  }
//draws the snake and makes it a square and makes it green
  this.render = function(){
    fill(0,255,0);
    for(var i = 0; i < this.segments.length; i++){
      rect(this.segments[i].x, this.segments[i].y, w, w);
    }

    rect(this.loc.x, this.loc.y, w, w);
  }
}
