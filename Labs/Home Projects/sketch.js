// Otoniel Carrein
// Home Projects
// 12/19
var w = 20;
var food;
var enemy;
var startScreen;
var endScreen;
var pacman;



function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  pacman = new PacMan(createVector(400,400), createVector(0,0))
}

 // The draw function is called @ 30 fps
function draw(){
  pacman.run();
}


function keyPressed(){
  if(keyCode === UP_ARROW){
    PacMan.vel = createVector(0,-1*w)
  }
  if(keyCode === DOWN_ARROW){
    PacMan.vel = createVector(0,1*w)
  }  if(keyCode === LEFT_ARROW){
    PacMan.vel = createVector(-1*w,0)
  }
  if(keyCode === RIGHT_ARROW){
    PacMan.vel = createVector(1*w,0)
  }
}


// function loadEnemies(){
//   for(var i = 0; i < numEnemies; i++){
//     var loc = createVector(random(width), random(height));
//     var rad = (20);
//     var col = color(random(255), random(255), random(255))
//     enemies.push(new Enemy(loc, col, vel))
//   }
// }
