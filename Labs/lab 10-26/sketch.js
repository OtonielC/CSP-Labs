

// Otoniel Carreon
// 29 October 2018
// Color bars Project
var bars = []
var numbars = 1
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadbars(numbars)

}

//  The draw function is called @ 30 fps
function draw() {
  background(20, 20, 20);
	for(var i = 0; i < bars.length; i++){
		bars[i].run();
	}
  console.log(bars);
}
function loadbars(numbars){
    for(var i = 0; i < numbars; i++){
      var col = color(random(255), random(255), random(255));
      var loc = (random(width), random(height));
    }
}
