/*
**Lab 911:CheckerBoard
**
**
*/
squares=[]
//  Global variables
// Declare squares[] as a global variable


// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(235);
  // Create a function that loads the squares into an
  // array of square objects and call the function
var sqr = []; loadSquares();
for(i = 0; i < squares.length; i++){
  squares[i].render();
}
  //  traverse array and run each square

}



function loadSquares(){
      var rowNum = 0;
      var colNum = 0;
      for(var row = 0; row < 8; row++){
        for(var col = 0; col < 8; col++){
          var loc = createVector(100*row, col);
          var clr = color(255,0,0);
          var w = 100;
          squares.push(new Sqr(loc, w, clr));
        }

  }
  console.log(squares);
}
