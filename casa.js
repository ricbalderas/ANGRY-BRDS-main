class casa extends sclase{
    constructor(x,y,h,angle){
    super(x,y,15,h,angle)
    this.image =loadImage("sprites/wood2.png")
    Matter.Body.setAngle(this.body,angle)
    }
    }