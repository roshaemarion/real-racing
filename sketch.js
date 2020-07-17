var gamestate=0;
var playercount=0;
var database
var player,form,game;
var allplayers,distance=0;
var car1,car2;
var carset=[]
function setup (){
    var canvas = createCanvas (displayWidth,displayHeight)
    database=firebase.database();
    game=new Game()
    game.getgameState()
    game.startgame()
}

function draw (){
if (playercount===2){
    game.updategameState(1)
}
if (gamestate===1){
    clear()
    game.playgame()
    
}
}