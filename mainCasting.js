let particles;
let walls;
let canva = document.getElementById("raycasting");
let ctx = canva.getContext("2d");
let bounds = [[100,0,0,300],[100,500,100,300],[100,200,400,200],[400,100,400,400],[0,0,0,500],[0,0,500,0],[500,500,500,0],[500,500,0,500]];



function show(x_pos,y_pos)
{
walls = new Wall(canva,ctx,bounds);
walls.drawWall();
particles = new Particle(canva,ctx,x_pos,y_pos);
	
  for(let radian=0; radian<6.3; radian+=0.034) 
  {

    let closest = null;
    let record = Infinity
      for(let b of bounds)
	  {
	    const points = particles.castParticle(b,radian);
	      if(points)
		  {
		      let d = particles.distance(x_pos,points.x,y_pos,points.y);
		         if(d < record)
				 {
			        record = d;
			         closest = points;
		         }
		             
	       }
    }
	                 if(closest)
					 {
		                 particles.drawParticle(closest.x,closest.y);
		            }
  }
}

show(100,200);

canva.addEventListener("mousemove",()=>{
	if(event.offsetX <= 1000 && event.offsetY <= 500){
ctx.clearRect(0,0,1000,1000);
show(event.offsetX,event.offsetY);
	}
});