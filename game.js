class Game{
    constructor(){

    }
    getgameState(){
    var gameStateref = database.ref('gameState')
    gameStateref.on("value",function(data){
        gamestate=data.val()
    })
    }

    updategameState(state){
    var gameStateref = database.ref('/')
    gameStateref.update({
        gameState:state
    })

    }
    startgame(){
        if (gamestate===0){
            player=new Player();
            player.getplayercount();
            form=new Form();
            form.display();
        }
        car1 = createSprite(400,800)
        car2 = createSprite(600,800)
        carset = [car1,car2]
    }
    playgame(){
      form.hide()
      text("welcome to the game",120,100)
        Player.getallplayerinfo()
        if (allplayers!==undefined){
            var positiony 
            var positionx = 600
            var i = 0
            for (var plr in allplayers){
                carset[i].x = positionx
                positiony = displayHeight-allplayers[plr].distance
                carset[i].y = positiony
                console.log (carset[i].x)
                i = i+1
                if (i===player.index){
                carset[i-1].shapeColor = "red"
                camera.position.x = displayWidth/2
                camera.position.y =  carset[i-1].y 
                }
           
            
            positionx = positionx+200
            } 
        }
        if (keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance=player.distance+20
            player.updateplayerinfo()
        }
        drawSprites()
    }

 

    
}