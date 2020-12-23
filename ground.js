class Ground{

    constructor(x,y,width,height){

        var options={
            isStatic:true,
            friction:0.4
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);
    }
    display(){

      rectMode(CENTER);
      fill("silver");
      rect(500,625,1200,20);
    
    }

}