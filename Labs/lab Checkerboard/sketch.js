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
var sqr = []; loadSquares(); for(i = 0; i squares.length)
  //  traverse array and run each square

}



function loadSquares(){
      var rowNum = 0;
      var colNum = 0;
      for(var row = 0; row < 8; row++){
        for(var col = 0; col < 8; col++){
          var loc = createVector(row, col);
          var clr = color(255,0,0);
          var w = 100;
          squares.push(new Sqr(loc, w, clr));
        }
                       //  Choose x in terms of i
                       //  Choose y in terms of i
        //  Create your location vector

  //  create a square object and push it into the squares array

  //  create a loop that will push 64 squares into an array
  //  calculate the x and y position interms of the loop control variable

  }
}
