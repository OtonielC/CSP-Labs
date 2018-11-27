function Food(loc){
  this.loc = loc
  this.iscolliding = false

  this.run = function(){
    this.render();
    this.update();
  }

  this.update = function(){
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
