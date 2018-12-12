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
    //this starts from the end of the segments array so that each segments follows the head
    for(var i = this.segments.length-1; i > 0; i--){
      this.segments[i].x = this.segments[i-1].x;
      this.segments[i].y = this.segments[i-1].y;
    }

    this.loc.add(this.vel);
    this.loc.x = constrain(this.loc.x, 0, width-w);
    this.loc.y = constrain(this.loc.y, 0 ,height-w);
    this.segments[0].x = this.loc.x;
    this.segments[0].y = this.loc.y;
    if(food.iscolliding === true){
      this.segments+=1
    }


    if(this.loc.x === food.loc.x && this.loc.y === food.loc.y){
      this.segments.push(createVector(62198354,125693874));
    }







  }

  this.isTangled = function(){
        var tangled = false;
        for(var i = this.segments.length-1; i > 1; i--){
            if(this.loc.x === this.segments[i-1].x &&
               this.loc.y === this.segments[i-1].y){
              fill(0,0,255)
              rect(50,50,700,700)
              fill(0,0,0)
              textSize(20)
              text('You have collided with yourself. Youre now dead!' +
              'Your score was ' + score + '.',100,400)
              gameOn = false
            }
        }

        return tangled;
  }
  //this function checks if the snake is touching the wall and then stops the game if it is.
  // this.outofBounds = function(){
  //   var outofBounds = false;
  //   if(this.loc.x === 800 && this.loc.y === 800 &&
  //      this.loc.x === 0 && this.loc.y === 0){
  //        if(this.vel ===)
  //      }
  //     if(this.loc.x === 0 && this.vel.x < 1){
  //       if(this.loc.y === 0 && this.vel.y < 1){
  //
  //       }
  //     }
  // }
  //draws the snake and makes it a square and makes it green
  this.render = function(){
    fill(0,255,0);
    for(var i = 0; i < this.segments.length; i++){
      rect(this.segments[i].x, this.segments[i].y, w, w);
    }
  }
}
