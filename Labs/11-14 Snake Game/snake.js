function Snake(loc, vel, col){
  this.loc = loc;
  this.vel = vel;
  this.col = col;

  this.run = function(){
    this.update;
    this.render;
  }

  this.update = function(){
    this.vel.mult(w);
    this.loc.add(this.vel);
    this.loc.x = constrain(this.loc.x, 0, width-w);
    this.loc.y = constrain(this.loc.y, 0 ,height-w);
  }

  this.render(){
    fill(255,0,0);
    rect(this.loc.x, this.loc.y, w, w);
  }
}
