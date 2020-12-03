//Create variables here
var dog, happyDog, database, foodS, foodStock;
function preload()
{
  //load images here
  
  happyDogI = loadImage('images/dogImg.png');
  hungryDogI = loadImage('images/dogImg1.png');
}

function setup() {
	createCanvas(500, 500);
  Dog = createSprite(250,250,50,50);
  Dog.addImage(hungryDogI);
  Dog.scale = (0.2)
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  Dog.addImage(happyDogI);
  Dog.scale = (0.2)
}
  drawSprites();
  text('Note: Press the Up Arrow to feed the dog some milk!', 50, 100)
  //add styles here

}
function readStock(data){
foodS = data.val();
}
function writeStock(x){
  database.ref("/").update({
    Food:x
  })
}


