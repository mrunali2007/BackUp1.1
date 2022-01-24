var PLAY = 1;
var END = 0;
var gameState = PLAY;

var pathImage;
var ground;


function preload() {
    pathImage = loadImage("path.jpg");
}

function setup() {
    canvas = createCanvas(600,500);

 var ground = createSprite(0, 0, 0, 0);
  //ground.shapeColor = "white";
  ground.addImage("ground_image", pathImage);
  //ground.scale = 1.4;
  ground.VelocityY= -10;
}

function draw() {
    background(pathImage);
    
    drawSprites();  
}

function windowResized() {
 resizeCanvas(windowWidth, windowHeight);
  }