class Form {
    constructor(){

        this.title = createElement ("h1")
        this.greeting = createElement("h3")
        this.inputbox = createInput("name")
        this.button = createButton("ok")
    }
    display(){
        
       this.title.html("Real Racing R")
        this.title.position(130,0)

       
       this.inputbox.position(130,160)
        
       
       this.button.position(250,200)


        

       this.button.mousePressed(()=>{
           this.inputbox.hide()
           this.button.hide()

             player.name= this.inputbox.value()
            playercount = playercount+1
            player.index=playercount
            

            player.updateplayerinfo()

            player.updateplayercount(playercount)
            this.greeting.html("HI champ"+player.name)

            this.greeting.position(130,160)
        })
    }
    hide(){
        this.inputbox.hide()
        this.button.hide()
        this.greeting.hide()
    }
}