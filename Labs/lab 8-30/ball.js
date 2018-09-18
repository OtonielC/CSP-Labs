function ball (loc, vel, radius, col){
  this.loc = loc;
  this.vel = vel;
  this.rad = radius;
  this.col = col;
  this.acc = createVector(0,.1);

  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }


  this.update = function(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
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
