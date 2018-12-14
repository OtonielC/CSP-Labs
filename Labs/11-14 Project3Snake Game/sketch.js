//Otoniel Carreon
//11/14
//Snake game
// var snakeLength = 1;
var cols, rows;
var snake;
var w = 20;
var score = 0;
var food;
var segments;
var gameOn = true;
var startGame = false;
var startScreen = true;
var restartGame = false;
//creates the head of the snake and the first piece of food and sets framerate to slow
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  cols = width/w;
  rows = height/w;
  food = new Food(createVector(round(random(40))*w, round(random(40))*w), createVector(w,0));
  snake = new Snake(createVector(round(width/2), round(height/2)), createVector(0,0));
  frameRate(15);
}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5);
  text('Your score is ' + score + ' ', 50,50);
  if(startScreen === true){
    fill(255,255,255)
    rect(50,50,700,700)
    fill(0,0,0)
    textSize(20)
    text('Welcome to SNAKE GAME! Press ENTER to start!',100,400)
  }
    if(gameOn === true){
      if(startGame === true){
        snake.run();
        food.run();
        startScreen = false;
      }
    }
    if(snake.isTangled()){}
    if(snake.outofBounds()){}
}


function keyPressed(){
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
  if(keyCode === ENTER){
    startGame = true;
  }
  if(keyCode === DELETE){
    gameOn = true;
    startGame = true;
    if(snake.isTangled()){}
    if(snake.outofBounds()){}
  }
}
 // function playAgain(){
 //   if(snake.outofBounds === true || snake.tangled === true){
 //     fill(0,0,255)
 //     rect(50,50,700,700)
 //     fill(0,0,0)
 //     textSize(20)
 //     text('Play again? Press SHIFT')
 //   }
 // }
