

/*
**  Square Constructor Function::
**  eettlin
**  Sept. 11, 2018
*/

//  Add perameters to your constructor function
function Sqr(location, sidelength, clr){
  this.loc = location;
    this.w = sidelength;
  this.col = clr;
}
//  Add instance variables to your constructor Function
//What does a square need to know about itself??
this.render = function(){
  fill(255,0,0)
  square(this.loc.x,this.loc.y)
}
//  End of Square constructor function
