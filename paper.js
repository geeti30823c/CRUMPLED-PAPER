class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:0,
			density:0.08

			
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		this.scale=40
		this.image=loadImage("paper.png")
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		
           
			push()
			translate(paperpos.x, paperpos.y);
		
			
			rectMode(CENTER);
			imageMode (CENTER);
	  image(this.image,0,0,this.r,this.r);
	  this.scale=40
			pop()
			
	}

}