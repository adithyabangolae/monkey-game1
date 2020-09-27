// I AHVE CHANGED THE CONCEPT OF THE GAME A BIT



var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running
var bananaImage, obstacle, obstacleImage
var score=0;
var ground;
var rock;
var surviveltime =0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  rockImage = loadImage("obstacle.png");
  bananaImage = loadImage("banana.png")
  
 
}



function setup() {
  createCanvas(600,600);
  
  monkey = createSprite(100,434,50,50)
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.2;
  
  
  ground = createSprite(300,500,1200,10)
  ground.x = ground.width /2;
  
  
  
console.log(monkey.y)
  
}


function draw() {
  background("white")
  
  stroke("grey");
  textSize(20);
  fill("grey")
  text("Score: "+ score, 500,70);
  
  stroke("black");  
  textSize(20);
  fill("black")
  surviveltime=Math.ceil(frameCount/frameRate())
  text("surviveltime: "+ surviveltime, 448,50);
  
  if(gameState === PLAY) {
    ground.velocityX = -3;
    
     if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
     spawnObstacles();
     spawnBanana();
    
        if(keyDown("space")&& monkey.y >= 430) {
        monkey.velocityY = -12;
        
    }
    monkey.velocityY = monkey.velocityY + 0.4
    
  }
  
  monkey.collide(ground);

  drawSprites();
}


function spawnObstacles(){
 if (frameCount % 120 === 0){
   rock = createSprite(600,450,10,40);
   rock.addImage("rock1" ,rockImage)
   rock.velocityX = -6;
   rock.lifetime = 300;
   rock.scale = 0.3;
   
   
    
    }
   
  
 
}

function spawnBanana(){
 if (frameCount % 120 === 0){
   var banana = createSprite(600,200,10,40);
   banana.addImage("bannana1" ,bananaImage)
   banana.velocityX = -6;
   banana.velocityY =  0.6;
   banana.lifetime = 300;
   banana.scale = 0.1;
   banana.x=rock.x
   
   
    
    }
   
  
 
}





