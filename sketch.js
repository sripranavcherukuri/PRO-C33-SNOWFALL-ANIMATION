var bg,snowBall,snowImg,boy1,boy1Create

function preload() {
  bg = loadImage("snow3.jpg");
  snowImg = loadImage("snow5.webp");
  boy1 = loadImage("ton-ton-friends-snow.gif")
  boy1Create = createImg("ton-ton-friends-snow.gif")
}

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(bg);

  //image(boy1,80,50)
  boy1Create.position(450,250)
  

  spawnSnow()  
  drawSprites();
}

function spawnSnow(){
  if (frameCount % 2 === 0){
     snowBall = createSprite(50 , -10, 50, 50);
     snowBall.x = Math.round(random(1,800))
     snowBall.addImage(snowImg)
     snowBall.scale = 0.01
     snowBall.velocityY = 2
  }
}