class Polygon{
    constructor(x, y, r){
        this.body = Bodies.circle(x, y,r);
        this.x=x;
        this.y=y;
        this.r=r;
        this.image= loadImage("polygon.png")
        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
image(polyimg, polygon.position.x, polygon.position.y, 40, 40);
    }
}