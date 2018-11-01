

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


// function loadbars(numbars){
//     for(var i = 0; i < numbars; i++){
//       var col = color(random(255), random(255), random(255));
//       var loc = createVector((0), (100));
//       b = new bar(col, loc);
//       bars.push(b);
//     }
//   }
function loadbars(numbars){
  var row = 0;
  var col = 0;
  for(var i = 0; i < numbars; i++){
    for(var row = 0; row < 8; row++){
      for(var col = 0; col < 8; col++){
        var col = color(random(255), random(255), random(255));
        var loc = createVector(100*row, col);
        bars.push(new bar(col, loc));
      }
    }
  }
}
function bubblesort(){
  for(var i = bars.length - 1; i > 0; i--){
    for(var x = 0; x < i; x++){
      if(bars[x] > bars[x+1]){
        var savedVariable = bars[x];
        bars[x] = bars[x+1];
        bars[x+1] = savedVariable;
      }
    }
  }
}
