class Player{
    constructor(){
 
        this.index = null;
        this.name = null;
        this.distance = 0;
        
    


    }

    getplayercount(){
        var playercountref = database.ref('playerCount')
        playercountref.on("value",function(data){
            playercount=data.val()
        })
    }
        updateplayercount(count){
            var playercountref=database.ref('/')
            playercountref.update({
                playerCount:count
            })
        }
        updateplayerinfo(){
            var playerindex = "players/player"+this.index
            var playerref= database.ref(playerindex)
            playerref.set({
                playername:this.name,
                playerdistance:this.distance
            })
        }
        static getallplayerinfo(){
            var playerinforef = database.ref('players')
            playerinforef.on ("value",(data)=>{
                allplayers=data.val()
            })
        }
    }

    
