var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
//Crie as variáveis 'cloud','cloudsGroup','cloudImage' e 'newImage'
var cloud, cloudsGroup, cloudImage;
var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
 
 //Utilize o código que carrega uma animação
 trex_collided = ???("trex_collided.png");
 //Utilize o código que carrega uma imagem
  groundImage = ???("ground2.png");
  
  cloudImage = ???("cloud.png");
 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.adicionarAnimação("colidiu",trex_colidiu)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  //Utilize o código 'addImage' para adicionar uma imagem
  ground.???("ground",groundImage);
  ground.x = ground.width /2;
  //Adicione uma velocidade negativa para o seu chão
  ground.velocityX = ??;
  
  
}

function draw() {
  background(180);
  
  
  //Adicone o código 'keyDown', pois ele significa 'pressiona'
  if(???("space") && trex.y>=100) {
    //Adicione uma velocidade negativa para o trex
    trex.velocityY = ???;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
 
  
  drawSprites();
}


