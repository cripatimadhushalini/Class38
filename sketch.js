var database;
var playerCount = 0;
var form,player,game;
var gameState = 0;
var allPlayers;
var cars,car1,car2,car3,car4;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-20,displayHeight-30);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
    game.play();
  }
}

/**var dog,sadDog,happyDog;
var database;
var feedTime;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  database = firebase.database();
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feedTime = database.ref('feedTime');
  feedTime.on("value",function(data){
  lastfeed = data.val();
  });
}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock
function readFood(){

}


//function to update food stock and last fed time
 function feedDog(){
   dog.addImage(happyDog);
   foodObj.updatefoodStock(foodObj.getFoodStock()-1);
   database.ref('/').update({
     Food:foodObj.getFoodStock(),
     feedTime:hour
   })
 }

//function to add food in stock

function addFood(){
  
}*/


