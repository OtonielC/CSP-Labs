//Otoniel Carreon
//11/14
//Snake game
var cols, rows;
var snake;
var w = 20;
var score = 0;
var food;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  cols = width/w;
  rows = height/w;
  frameRate(100);
  snake = new Snake(createVector(width/2, height/2), createVector(1,0));
  console.log(snake);
  food = new Food(createVector((width/2), (height/2)));
}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5);
  snake.run();
  food.run();
}


function keyPressed(){
  text(keyCode, 50,50);
  if(keyCode === UP_ARROW){
    snake.vel = createVector(0,-1*w)
  }
  if(keyCode === DOWN_ARROW){
    snake.vel = createVector(0,1*w)
  }
  if(keyCode === LEFT_ARROW){
    snake.vel = createVector(-1*w,0)
  }
  if(keyCode === RIGHT_ARROW){
    snake.vel = createVector(1*w,0)
  }
}
