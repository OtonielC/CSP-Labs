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

// this function is supposed to create Catcher or the chaser and its supposed to only move around and not do anything
  this.update = function(){
    var mouseLoc = createVector(mouseX, mouseY);
    var steeringForce = p5.Vector.sub(this.loc, mouseLoc);
    catcher.loc = p5.Vector.lerp(this.loc, mouseLoc, .9)
    if(this.catcher !== mouseLoc){
      steeringForce.normalize();
      steeringForce.mult(.04);
      this.vel.add(steeringForce);
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
