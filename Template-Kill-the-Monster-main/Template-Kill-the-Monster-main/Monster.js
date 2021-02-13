class Monster{
    constructor(x,y,w,h){
        var options ={
            isStatic:false,
            resititution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        this.w=w
        this.h=h
        this.image = loadImage("/Images/Monster-01.png");
        World.add(world,this.body);
    }
    display(){
        
        push()
        translate( this.body.position.x, this.body.position.y)
        imageMode(CENTER)
        image(this.image,0,0,this.w,this.h)
        pop()
    }
}