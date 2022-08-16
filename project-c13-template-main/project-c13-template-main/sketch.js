var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var orangeLeaf,orangeImg;
var redLeaf,redImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  //comando para aparecer as maçãs e folhas
  

  rabbit.x = World.mouseX;

  var apple = Math.round(random(1.3));

  var orangeLeaf = Math.round(random(1.3));

  var redLeaf = Math.round(random(1.3));

  if (frameCount % 80 == 0){
    if (apple == 1) {
      spApples();
    }
  

  else if (redLeaf ==2) {
      spRed();
      
  }
    else {
      spOrange();

  }
}
}

function spApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
}

function spRed() {
  redLeaf = createSprite(random(50, 350),40, 10, 10);
  redLeaf.addImage(redImg);
  redLeaf.scale=0.07;
  redLeaf.velocityY = 3;
  redLeaf.lifetime = 150;
  }

  function spOrange() {
    orangeLeaf = createSprite(random(50, 350),40, 10, 10);
    orangeLeaf.addImage(orangeImg);
    orangeLeaf.scale=0.07;
    orangeLeaf.velocityY = 3;
    orangeLeaf.lifetime = 150;
    }