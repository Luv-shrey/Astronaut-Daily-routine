var astronaut;
var astro_brush;
var astro_gym1;
var astro_gym2;
var astro_bath;
var astro_drink;
var astro_sleep;
var astro_move;
var astro_eat;
var bg;

function preload(){
  bg = loadImage("iss.png");
  astro_brush = loadAnimation("brush.png");
  astro_gym1 = loadAnimation("gym1.png","gym2.png");
  astro_gym2 = loadAnimation("gym11.png","gym12.png");
  astro_bath = loadAnimation("bath1.png","bath1.png","bath1.png","bath2.png","bath2.png","bath2.png");
  astro_drink = loadAnimation("drink1.png","drink1.png","drink2.png","drink2.png");
  astro_sleep = loadAnimation("sleep.png");
  astro_move = loadAnimation("move.png","move.png","move1.png","move1.png");
  astro_eat = loadAnimation("eat1.png","eat1.png","eat1.png","eat2.png","eat2.png","eat2.png");
}

function setup() {
  createCanvas(600,500);
  
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",astro_sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(bg);
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",astro_brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("Gymming1",astro_gym1);
    astronaut.changeAnimation("Gymming1");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("Gymming2",astro_gym2);
    astronaut.changeAnimation("Gymming2");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("Bathing",astro_bath);
    astronaut.changeAnimation("Bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("D")){
    astronaut.addAnimation("Drinking",astro_drink);
    astronaut.changeAnimation("Drinking");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("m")){
    astronaut.addAnimation("moving", astro_move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }
  
  if(keyDown("E")){
    astronaut.addAnimation("Eating",astro_eat);
    astronaut.changeAnimation("Eating");
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }
  
  drawSprites();
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  
  stroke("white");
  fill("white");
  textSize(20);
  text("Instructions:",20,20);
  textSize(15);
  text("Up Arrow = Brushing",20,35);
  text("Left Arrow = Gym1",20,50);
  text("Right Arrow = Gym2",20,65);
  text("Down Arrow = Bath",20,80);
  text("D = Drink",20,95);
  text("M = Move",20,110);
  text("E = Eating",20,125);
  
}