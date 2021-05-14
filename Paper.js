class Paper{

    constructor(x,y,DIAMETER){
        var options ={
            isStatic: false,
            'restitution': 0.03,
            'friction':0.5,
            'density':1.2
        };

        this.body = Bodies.circle(x,y,DIAMETER,options);
        World.add(world,this.body);
        
    }

    display(){
        var pos =this.body.position;
      ellipseMode(RADIUS);
      fill(255);
      ellipse(50,680,10,10); 
    }
};