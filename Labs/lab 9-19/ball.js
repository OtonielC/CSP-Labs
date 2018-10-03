function catcher (loc, vel, radius, col){
  this.loc = loc;
  this.vel = vel;
  this.rad = radius;
  this.col = col;

  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

// this function is supposed to create b1 or the chaser and its supposed to only move around and not do anything
  this.update = function(){
    var mouseLoc = createVector(mouseX, mouseY);
    if(this.b1 !== mouseLoc){
      b1.loc = p5.Vector.lerp(this.loc, mouseLoc)
      }
    }



  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }


  this.render = function(){
    fill(this.col);
    ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
  }
}
