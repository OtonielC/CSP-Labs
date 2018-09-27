function boid (loc, vel, col,acc){
  this.loc = loc;
  this.vel = vel;
  this.col = col;
  this.acc = acc;

  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }


  this.update = function(){
    this.loc.add(this.vel);
    if(this.b1 !== mouseLoc){
      var mouseLoc = createVector(mouseX, mouseY);
      this.loc = p5.Vector.lerp(this.loc, mouseLoc)
      var steeringForce = p5.Vector.sub(mouseLoc, this.loc);
      steeringForce.normalize();
      steeringForce.mult(.4);
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
    push()
      translate(this.loc.x, this.loc.y);
      rotate();
      triangle(-5,0,5,0,0,-15)
    pop()
    fill(this.col);

  }
}
