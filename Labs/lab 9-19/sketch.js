var b1;
var balls = []
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  fill(200, 30, 150);
  loadBalls(200);
  b1 = new ball(createVector(width/2,height/2), createVector(0,0), 25, color(255,0,0))
}

//  The draw function is called @ 30 fps
function draw() {
  background(20,20,20);
  b1.run();
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
     var acc = createVector(0,.01)
     balls.push(new ball(loc, vel, radius, col, acc));
   }
 }
