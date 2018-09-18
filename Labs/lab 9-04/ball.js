function ball (loc, vel, radius, col,acc){
  this.loc = loc;
  this.vel = vel;
  this.rad = radius;
  this.col = col;
  this.acc = acc;

  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }


  this.update = function(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    if(this !== b1){
      var d = this.loc.dist(b1.loc)
      if(d<3000){
        var steeringForce = p5.Vector.sub(b1.loc, this.loc);
        steeringForce.normalize();
        steeringForce.mult(.2);
        this.vel.add(steeringForce);
      }
      if(d < 100){
        var steeringForce = p5.Vector.sub( this.loc, b1.loc);
        steeringForce.normalize();
        steeringForce.mult(0.2);
        this.vel.add(steeringForce);
      }
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
