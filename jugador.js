class jugador extends sclase{
    constructor(x,y){
    super(x,y,45,35)
    this.image =loadImage("sprites/bird.png")
    }
    mas(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
    super.mas()
    }
    }