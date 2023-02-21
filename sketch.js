var PLAY = 1;
var END = 0;
var gameState = PLAY;

var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score=0;

//Passo 1: Crie as variáveis 'gameOver' e 'restart'


function preload(){
  trex_running =   loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
  
  //Passo 2 Carregue as imagens de 'gameOver.png' e 'restart.png' dentro das suas variáveis 
 //???
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  
  trex.addAnimation("running", trex_running);
  trex.addAnimation("collided", trex_collided);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);

  ground.velocityX = -(6 + 3*score/100);
  
  gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
  gameOver.scale = 0.5;
  restart.scale = 0.5;

  gameOver.visible = false;
  restart.visible = false;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //Passo 3: Crie um grupo para as nuvens e para os obstáculos
  //Esses grupos se chamarão: 'cloudsGroup' e 'obstaclesGroup'
 //???
  
  score = 0;
}

function draw() {
  //trex.debug = true;
  background(255);
  text("Pontuação: "+ score, 500,50);
  
  if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    ground.velocityX = -(6 + 3*score/100);
    //altere a animação de trex
    trex.changeAnimation("running", trex_running);
    
    if(keyDown("space") && trex.y >= 159) {
      trex.velocityY = -12;
    }
  
    trex.velocityY = trex.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    trex.collide(invisibleGround);
    spawnClouds();
    spawnObstacles();
  
    //Passo 4: Programe que...
    //Se o obstáculo toca no trex, o estado do jogo será END
  //???
  }
  else if (gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
    
    //Passo 5:defina a velocidade de cada objeto do jogo para 0
    ground.velocityX = 0;
    trex.??? = 0;
    obstaclesGroup.setVelocityXEach(0);
    cloudsGroup.???(0);
    
    //mude a animação de trex 
    trex.changeAnimation("collided",trex_collided);
    
    //defina o tempo de vida dos objetos do jogo para que eles não sejam destruídos
    obstaclesGroup.setLifetimeEach(-1);
    cloudsGroup.setLifetimeEach(-1);
    
    //Passo 6: programe que...
    //Se você pressionar com o mouse na imagem ' restart', acontecerá a função 'reset()'
    if(mousePressedOver(restart)) {
      reset();
    }
  }
  
  
  drawSprites();
}
