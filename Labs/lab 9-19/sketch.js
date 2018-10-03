//this is a list of all th4e global variables in the project
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
  catcher = new boid(createVector(width/2, height/2), createVector(0,0), 25, color(255,0,0));
}

//  The draw function is called @ 30 fps
function draw() {
  background(20, 20, 20);
	for(var i = 0; i < boids.length;i++){
		boids[i].run();
	}
  catcher.run()
}

//this is ,y load boids function
 function loadBoids(numboids){
   for(var i = 0; i < numboids; i++){
     var loc = createVector(random(width), random(height));
     var vel = createVector(random(-1.0, 1.0), random(-1.0, 1.0));
     var col = color(random(255), random(255), random(255));
     var b = new boid(loc, vel, col)
     boids.push(b)
   }
 }
