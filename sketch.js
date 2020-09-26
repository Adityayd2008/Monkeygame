var monkey, monkey_running
var ground, insivibleground
var banana, bananaimage, obstacle, obstacleimage
var foodgroup, obstaclegroup
var score
var invisibleground
var survivaltime

function preload()
{


  monkeyrunning = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaimage = loadImage("banana.png");
  obstacleimage = loadImage("obstacle.png");

}



function setup()
{
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("monkeyanimation", monkeyrunning);
  monkey.scale = 0.1

  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;

  invisibleground = createSprite(400, 355, 800, 20)
  invisibleground.visible = false

  foodgroup = createGroup();
  obstaclegroup = createGroup();
  survivaltime = 0

}


function draw()
{
  background("white")
  text("SuvivalTime: " + survivaltime, 160, 50);

  if (keyDown("space") && monkey.y >= 100) 
  {
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(invisibleground);

  if (ground.x < 0)
  {
    ground.x = ground.width / 2;
  }

  survivaltime = Math.ceil(frameCount / frameRate())


  banana1();
  obstacles();

  drawSprites();
}


function banana1() 
{

  if (frameCount % 80 === 0)
  {
    banana = createSprite(400, 200, 20, 20);
    banana.addImage(bananaimage);
    banana.scale = 0.1;
    banana.velocityX = -4
    banana.y = random(120, 200);
    foodgroup.add(banana);
  }

}

function obstacles()
{

  if (frameCount % 300 === 0) {
    obstacle = createSprite(400, 330, 20, 20);
    obstacle.addImage(obstacleimage)
    obstacle.scale = 0.1;
    obstacle.velocityX = -4
    obstaclegroup.add(obstacle);
  }

}