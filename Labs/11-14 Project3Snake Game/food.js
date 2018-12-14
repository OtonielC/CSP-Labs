function Food(loc, vel){
  this.loc = loc;
  this.vel = vel;
  this.iscolliding = false

  this.run = function(){
    this.render();
    this.update();
  }

  this.update = function(){
    this.loc.add(this.vel);
    if(this.loc.x > 780 || this.loc.x < 20){
      this.loc.add()
    }
    //makes sure that food stays in between in the boundaries
    // this.loc.x = constrain(this.loc.x, 0, width-w);
    // this.loc.y = constrain(this.loc.y, 0 ,height-w);
    if(snake.loc.x === this.loc.x && snake.loc.y === this.loc.y){
      // this.loc.x = (round(random(40))*w)
      // this.loc.y = (round(random(40))*w)
      for(var i = 0; i < snake.segments.length; i++){
        this.loc.x = (round(random(40))*w)
        this.loc.y = (round(random(40))*w)
        if(this.loc.x === snake.segments[i].x && this.loc.y === snake.segments[i].y){
          this.loc.x = (round(random(40))*w)
          this.loc.y = (round(random(40))*w)
        }
      }
      score+=1


      // if(snake.segments.length > 0){
      //   for(var i = 1; i > snake.segments.length-1; i++){
      //     if(snake.segments[0].x === snake.segments[i].x &&
      //        snake.segments[0].y === snake.segments[i].y){
      //       rect(0,0,400,400)
      //       textSize(200)
      //       text('You have collided with yourself. Youre now dead!' +  'Your score was ' + score + '.')
      //     }
      //   }
      // }
    }
  }


    this.render = function(){
      fill(255,0,0);
      rect(this.loc.x, this.loc.y, w, w)
    }

}
