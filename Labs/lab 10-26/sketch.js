

// Otoniel Carreon
// 29 October 2018
// Color bars Project
var bars = []
var numbars = 2
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadbars(numbars)
  console.log(bars)
}

//  The draw function is called @ 30 fps
function draw() {
	for(var i = 0; i < bars.length; i++){
		bars[i].run();
	}
}


function loadbars(numbars){
    for(var i = 0; i < numbars; i++){
      var col = color(random(255), random(255), random(255));
      var loc = createVector((0), (100));
      b = new bar(col, loc);
      bars.push(b);
      if(numbars > 1){
        for(var x = 0; x < bars[i]; x++)
        bars.loc.x = bars.loc.x+100;
    }
}
}
