
//Paddle Game
//Otoniel Carreon
//10/4/18
var balls = [];
var paddle;
var round = 1;
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  fill(200, 30, 150);
  loadballs(10);
  paddle = new Paddle(createVector(5,10), 33, color(255,255,255));
}

//  The draw function is called @ 30 fps
//Here im going to call the paddle
  function draw() {
    background(20, 20, 20);
    paddle.run();
    score = 'there are ' + balls.length + ' balls'
    for(var i = balls.length-1; i >= 0; i--){
      balls[i].run();
      if(balls[i].iscoliding){
        balls.splice(balls[i],1);
      }
    }
    fill(255);
    text(score, 10, 30);
    fill(255);
    text(round, 10, 60);
    //this code checks if the velocity of the balls is negative(going up) or positive(going down).
  if(this.iscoliding === true && this.vel.y<0){
    //the next round has to begin and the code has to add balls.
    //I have to chaqnge the score so that it equals the next amount of balls
    balls.length + 5;
    round + 1
    }
}
//this function will load the amount of balls into the array balls[]
//then it will set the variables inside of the balls so each will have
//location, velocity, color, radius, and acceleration
  function loadballs(numball){
    for(var i = 0; i < numball; i++){
      var loc = createVector(random(width), 1);
      var vel = createVector(random(-3.0, 3.0), random(-3.0, 3.0));
      var col = color(random(255), random(255), random(255));
      var rad = (20);
      var b = new ball(loc, vel, col, rad);
      balls.push(b)
        }
    }
