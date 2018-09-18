var b1;
var balls = []
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBalls(50);
}

//  The draw function is called @ 30 fps
function draw() {
	background(20,20,20,20);
	for(var i = 0; i < balls.length;i++){
		balls[i].run();
	}
}
 function loadBalls(numBalls){
   for(var i = 0; i < numBalls; i++){
     var loc = createVector(random(width), random(height));
     var vel = createVector(random(-3.0, 3.0), random(-3.0, 3.0));
     var radius = (20);
     var col = color(random(255), random(255), random(255));
     balls.push(new ball(loc, vel, radius, col));
   }
 }
