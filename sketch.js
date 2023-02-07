
var trex, trex_running, trex_collided;
//Crie a variável 'ground', 'invisibleGround' e 'groundImage'

//Adicione o código 'loadAnimation' para carrega uma animação
function preload(){
  trex_running = ???("trex1.png","trex3.png","trex4.png");
}

function setup() {
  createCanvas(600, 200);
  
  //Utilize o código 'createSprite' para criar o sprite do trex
  trex = ???(50,180,20,50);
  //Utilize o código 'addAnimation' para adicionar a animação correndo ao trex
  trex.???("running", trex_running);
  
  //Utilize o código 'scale' para definir o tamanho do trex
  trex.??? = 0.5;
  trex.x = 50
  
  //Utilize o código que cria um spite para você criar o ground(solo)
  ground = ???(200,180,400,20);
 
}

function draw() {
  background(220);
  
  trex.velocityY = trex.velocityY + 0.8
  
 
 //Para impedir que o trex caia, utilize o código 'colide'
  trex.???(ground);
  //Para desenhar todos os sprites na tela, utilize o código ' drawSprites();'
 
}
