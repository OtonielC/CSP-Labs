function Food(loc, vel){
  this.loc = loc;
  this.vel = vel;
  this.iscolliding = false

  this.run = function(){
    this.render();
    this.update();
  }

  this.update = function(){
    //makes sure that food stays in between in the boundaries
    this.loc.x = constrain(this.loc.x, 0, width-w);
    this.loc.y = constrain(this.loc.y, 0 ,height-w);
    // if(snake.segments[0].x === this.loc.x &&
    //   snake.segments[0].x === this.loc.x + w &&
    //   snake.segments[0].y === this.loc.y &&
    //   snake.seegments[0].y === this.loc.y + w){
    //     this.iscolliding = true
    //   }
    // if(this.iscolliding === true){
    //   this.loc = round(random(40))*w
    //   score+=1
    // }
    //this adds points to the score when the snake head touches the food and not the body
    //also, it changes the food to a random location
    if(snake.loc.x === this.loc.x && snake.loc.y === this.loc.y){
      this.loc.x = (round(random(40))*w)
      this.loc.y = (round(random(40))*w)
      score+=1
    }
  }


    this.render = function(){
      fill(255,0,0);
      rect(this.loc.x, this.loc.y, w, w)
    }

}
