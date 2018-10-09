
//Paddle Game
//Otoniel Carreon
//10/4/18
var balls = [];
var paddle;
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  fill(200, 30, 150);
  loadballs(1);
}

//  The draw function is called @ 30 fps
//Here im going to try ot draw the paddle
  function draw() {
    for(var i = 0; i < balls.length; i++){
      balls[i].run();
    }
}
//this function will load the amount of balls into the array balls[]
//then it will set the variables inside of the balls so each will have
//location, velocity, color, radius, and acceleration
  function loadballs(numballs){
    for(var i = 0; i < numballs; i++);
      var loc = createVector(random(width), random(height));
      var vel = createVector(random(-3.0, 3.0));
      var acc = createVector(0,.01);
      var col = color(random(255), random(255), random(255));
      var rad = (20);
      balls.push(new ball(loc, vel, acc, col, rad));
}
