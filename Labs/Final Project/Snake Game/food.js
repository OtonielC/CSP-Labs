function Food(loc, vel){
  this.loc = loc;
  this.vel = vel;
  this.iscolliding = false
//runs all functions in this page
  this.run = function(){
    this.render();
    this.update();
  }
//updatexzs the food so it adds a point to the score
  this.update = function(){
    //this.loc.add(this.vel);
    if(this.loc.x > 780 || this.loc.x < 20){
      this.loc.add()
    }
    //makes sure that food stays in between in the boundaries
    // this.loc.x = constrain(this.loc.x, 0, width-w);
    // this.loc.y = constrain(this.loc.y, 0 ,height-w);
    if(snake.loc.x === this.loc.x && snake.loc.y === this.loc.y){
//this checks if the food is appearing in the location of the snake so then it randomizes again and appears somewhere else.
      for(var i = 0; i < snake.segments.length; i++){
        this.loc.x = (round(random(40))*w)
        this.loc.y = (round(random(40))*w)
        if(this.loc.x === snake.segments[i].x && this.loc.y === snake.segments[i].y){
          this.loc.x = (round(random(40))*w)
          this.loc.y = (round(random(40))*w)
        }
      }
      score+=1


  }
//renders the food

    this.render = function(){
      fill(255,0,0);
      rect(this.loc.x, this.loc.y, w, w)
    }

}
