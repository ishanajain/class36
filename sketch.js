var canvas , backroudImage ; 
var gameState = 0;
var playerCount ;
var database;
var form , player , game;



function setup(){
  database = firebase.database();
  
  Canvas = createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start();
  
  
  

 
}

function draw(){
  background("white");
  
}

