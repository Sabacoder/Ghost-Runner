var door,doorImage
var climber, climberImage
var tower,towerImage
var ghost,ghostImage
var doorgroup,climbergroup
var inviblock,blockgroup
var gameState="play"
var spookysound

function preload(){
  doorImage=loadImage("door.png");
  climberImage=loadImage("climber.png");
  towerImage=loadImage("tower.png");
  ghostImage=loadImage("ghost-standing.png");
  spookysound=loadSound("spooky.wav");

}


function setup(){
  createCanvas(600,600);
  tower=createSprite(300,300)
  tower.addImage(towerImage);
  tower.velocityY=2;
  
  ghost=createSprite(200,200,50,50)
  ghost.addImage(ghostImage);
  ghost.scale=0.4;
  
  
  doorgroup=new Group()
  climbergroup=new Group()
  blockgroup=new Group()
  
  spookysound.play();
}


function draw(){
  background("black");
  if(gameState==="play"){
     
     
     
  if(tower.y>500){
    tower.y=300
          }
  
  if(keyDown("left_arrow")){
     ghost.x=ghost.x-3;
     
     }
  if(keyDown("right_arrow")){
     ghost.x=ghost.x+3;
     
     }
  
if(keyDown("space")){
     ghost.velocityY=-5;
   
     
     }
  ghost.velocityY=ghost.velocityY+0.5;
  
  if(climbergroup.isTouching(ghost)){
     
     ghost.velocityY=0;
     
     }
  
  if(blockgroup.isTouching(ghost)||ghost.y>600){
     
     ghost.destroy();
     
    gameState="end"
     }
  
  spawndoors()
  drawSprites()
  }
  if(gameState==="end"){
    stroke("pink")
    fill("blue")
    textSize(35)
    text("GAME OVER!",220,215)
     
     
     spookysound.stop()
     }
}

function spawndoors(){
  
  if(frameCount%240===0){
     door=createSprite(200,-50)
     door.addImage(doorImage);  
    door.x=Math.round(random(120,400))
      door.velocityY=2;
      door.lifetime=800;
  doorgroup.add(door)
    
     climber=createSprite(200,10)
     climber.addImage(climberImage);  
    climber.x=door.x;
      climber.velocityY=2;
      climber.lifetime=800;
  climbergroup.add(climber)
    
    ghost.depth=door.depth
    ghost.depth+=1
    
    inviblock=createSprite(200,15,climber.width,2) ;
    inviblock.x=door.x;
      inviblock.velocityY=2;
      inviblock.lifetime=800;
    inviblock.debug=true;
  blockgroup.add(inviblock)
  }
  
}
