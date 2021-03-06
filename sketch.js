var player,playerImg
var bg,bgImg
var candy,candyImg1,candyImg2,candyImg3
var vegetable,vegetableImg1,vegetableImg2
var candyGroup,vegetableGroup
function preload() {
  playerImg=loadImage("Images/player.png")
  bgImg=loadImage("images/candyBackground.jpg")
  candyImg1=loadImage("images/candy1.png")
  candyImg2=loadImage("images/candy2.png")
  candyImg3=loadImage("images/candy3.png")
  vegetableImg1=loadImage("images/broccoli.png")
  vegetableImg2=loadImage("images/carrot.png")
}

function setup () {
  createCanvas(1200,969)

  bg=createSprite(600,600,1500,1500)
  bg.addImage("bg",bgImg)
  bg.scale=2
  bg.velocityX=-3
  player=createSprite(50,900,20,20)
  player.addImage("player",playerImg)
  player.scale=0.4

  candyGroup=new Group();
  vegetableGroup=new Group();
  invisibleGround=createSprite(300,1000,1200,2)
  invisibleGround.visible=false;
}

function draw() {
  background(bgImg);

if (bg.x<0) {
  bg.x=bg.width/4
}
if(keyDown("space")){
  player.velocityY=-7
}
player.velocityY+=1
camera.position.y=player.y
player.collide(invisibleGround)
  spawnVegetable();
  spawnCandy(); 
  drawSprites();
}

function spawnCandy() {
  if(frameCount%120===0){
    candy = createSprite(1180,random(500,1000));
    candy.velocityX=-6

    var world=Math.round(random(1,3))
    switch(world){
      case 1:candy.addImage("candy",candyImg1);
      break;
      case 2:candy.addImage("candy",candyImg2);
      break;
      case 3:candy.addImage("candy",candyImg3);
      default:break;

    }
    candy.scale=0.18
    candyGroup.add(candy)
  }
}

function spawnVegetable() {
  if(frameCount%80===0){
    vegetable = createSprite(1180,random(500,1000));
    vegetable.velocityX=-6

    var world=Math.round(random(1,2))
    switch(world){
      case 1:vegetable.addImage("vegetable",vegetableImg1);
      break;
      case 2:vegetable.addImage("vegetable",vegetableImg2);
      default:break;

    }
    vegetable.scale=0.18
    vegetableGroup.add(vegetable)
  }
}
