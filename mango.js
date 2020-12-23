class Mango{
    constructor(x, y, diametre) {
        var options = {
            isStatic:true,
            'restitution':0.5,
            'friction':1.0,
        }
        this.body = Bodies.circle(x, y, diametre , options);
        this.diametre=diametre;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
      }
      display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        imageMode(CENTER);
        image(this.image, 0, 0, this.diametre);
        pop();
      }
}