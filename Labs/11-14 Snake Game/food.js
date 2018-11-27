function Food(loc, vel){
  this.loc = loc;
  this.vel = vel;
  this.iscolliding = false

  this.run = function(){
    this.render();
    this.update();
  }

  this.update = function(){
    this.loc.x = constrain(this.loc.x, 0, width-w);
    this.loc.y = constrain(this.loc.y, 0 ,height-w);
    if(snake.loc.x === this.loc.x &&
      snake.loc.x === this.loc.x + w &&
      snake.loc.y === this.loc.y &&
      snake.loc.y === this.loc.y + w){
        this.iscolliding = true
      }
    if(this.iscolliding === true){
    }
  }


    this.render = function(){
      fill(255,0,0);
      rect(this.loc.x, this.loc.y, w, w)
    }

}
