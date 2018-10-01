var b1;
var boids = []
var catcher;
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  fill(200, 30, 150);
  loadBoids(50);
  b1 = new boid(createVector(width/2, height/2), createVector(0,0), 25, color(255,0,0));
}

//  The draw function is called @ 30 fps
function draw() {
  background(20, 20, 20);
	for(var i = 0; i < boids.length;i++){
		boids[i].run();
	}
}
 function loadBoids(numboids){
   for(var i = 0; i < numboids; i++){
     var loc = createVector(random(width), random(height));
     var vel = createVector(random(-3.0, 3.0), random(-3.0, 3.0));
     var col = color(random(255), random(255), random(255));
     var acc = createVector(0,.01)
     var b = new boid(loc, vel, col, acc)
     boids.push(b)
   }
 }
  function loadcatcher(){
   for(var i = 0; i < 1; i++){
     var loc = createVector(random(width), random(height));
     var vel = createVector(random(-3.0, 3.0), random(-3.0, 3.0));
     var col = color(random(255), random(255), random(255));
     var acc = createVector(0,.01)
     var b = new catcher(loc, vel, col, acc)
     catcher.push(b)
   }
 }
