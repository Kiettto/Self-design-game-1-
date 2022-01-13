var sky, skyImg;
var bird, birdAnimation;




function preload() {
  skyImg = loadImage("assets/Sky.png");

  birdAnimation = loadAnimation("assets/Bird Animation/bird1.png","assets/Bird Animation/bird2.png","assets/Bird Animation/bird3.png","assets/Bird Animation/bird4.png");

}
function setup() {
  canvas = createCanvas(displayWidth, displayHeight);

  sky = createSprite(width / 2, height / 2);
  sky.addImage(skyImg);
  sky.velocityX = -3;

  bird = createSprite(300,height/2);
  bird.addAnimation("flying", birdAnimation);

}

function draw() {
  background(189);
  console.log(sky.x);

  if (sky.x < 0) {
    sky.x = width/2;
  }


  drawSprites();
}
