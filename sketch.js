//Create variables here
var dog,happyDog,dogImage,happyDogImage, database, foodS, foodStock;
function preload()
{
  //load images here
 dogImage=loadImage("Dog.png");
 happyDogImage=loadImage("happydog.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog=createSprite(250,250,30,30);
  dog.addImage(dogImage);
  dog.scale=0.15;

  foodStock=database.ref("Food");
  foodStock.on("value",readStock);
}


function draw() {  
  background(color(46, 139, 87));

  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImage);
  }

  drawSprites();

  fill("yellow");
  textSize(20);
  text("Press the up arrow key and feed the dog",75,100);
}
function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1
  }
  database.ref('food/').update({
    'value': x
  })
}

function readStock(data){
  position = data.val();

 foodStock=value;
}


