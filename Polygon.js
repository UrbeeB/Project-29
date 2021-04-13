class Polygon{
	constructor(x,y,r){

  var options = {
	'restitution':0.3,
	'friction':0,
	'density':1.2
   }
    
    this.x=x;
    this.y=y;
    this.r=r;
    this.image = loadImage("polygon.png");
	this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options);
  
	World.add(world, this.body);
   }

display(){
    
	var pos=this.body.position;	

	push();
    translate(pos.x, pos.y);
	imageMode(CENTER);
	stroke("black");
	image(this.image, 0, 0, this.r, this.r);
	pop();
   }
};

        