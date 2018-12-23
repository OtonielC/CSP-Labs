function PacMan(loc, vel){
  this.loc = loc;
  this.vel = vel;

  this.run = function(){
    this.update();
    this.render();
  }


  this.update = function(){
    this.loc.add(this.vel);

  }





  this.render = function(){
    fill(0,255,0)
    ellipse(400, 400, 20,20)
  }




}
