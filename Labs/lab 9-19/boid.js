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
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    if(this !== b1){
      var mouseLoc = createVector(mouseX, mouseY);
      this.loc = p5.Vector.lerp(this.loc, mouseLoc, .02)
      if(mouseLoc<1000){
        var steeringForce = p5.Vector.sub(b1.loc, this.loc);
        steeringForce.normalize();
        steeringForce.mult(.2);
        this.vel.add(steeringForce);
      }
      if(mouseLoc < 100){
        var steeringForce = p5.Vector.sub( this.loc, b1.loc);
        steeringForce.normalize();
        steeringForce.mult(.2);
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
    push()
      translate(this.loc.x, this.loc.y);
      rotate(100);
      triangle(-5,0,5,0,0,-15)
    pop()
    fill(this.col);

  }
}
