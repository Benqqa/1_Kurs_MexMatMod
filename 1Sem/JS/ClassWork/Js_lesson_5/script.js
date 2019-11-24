
window.addEventListener('load',main,false);
function main()
{
	var ctx2=canvas_ex2.getContext('2d');
	
	var ctx=canvas_ex.getContext('2d');
	var h=canvas_ex.height;
	var hp=canvas_ex2.height;
	var wp=canvas_ex2.width;
	var w=canvas_ex.width;
	var fps=60// колисество кадров
	var x= w/2;
	var y= h/2;
	var v=100;
	var r= 50;
	var dt=1/fps;
	var b=0.1;
	var E=[];
	var t_max=0;
	var fi=Math.random()*Math.PI;// уголо отвечающий за направление вектора скоррости
	var vy= v*Math.sin(fi);// проекция на ость Х
	var vx= v*Math.cos(fi);// проекция на осб У
	
	var massA=[,];
	/*for(var i=0; i<5;i++)
	{
		for(var k=0; k<1;k++){
		fi=Math.random()*Math.PI;
		vy= v*Math.sin(fi);
		vx= v*Math.cos(fi);
		//massX[i,k]=
		}
	}*/
	function phys() // считаем физику
	{
		//alert('2')
		
		vx+=b*vx*dt;
		vy+=b*vy*dt;
		
		canvas_ex.width = canvas_ex.width;
		x=x+vx*dt
		y=y+vy*dt
		
		E.push(vx*vx+vy*vy);// добавление энергии в масив
		if(x-r<0||x+r>w)
		{
			vx=-vx;			
		}
		if(y-r<0||y+r>h)
		{
			vy=-vy;
		}
		t_max+=dt;
	}
	
	function draw() //рисуем
	{
		//alert('3')
		ctx.beginPath();
		ctx.arc(x,y,r,0,2* Math.PI);
		
		ctx.fill();
		//
		ctx2.clearRect(0,0,wp,hp);
		var E_scale=hp/Math.max.apply(null,E);
		var t_scale=wp/t_max;
		ctx2.beginPath();
		for(var i=0; i<E.length-1;i++)
		{
			ctx2.moveTo(dt*i*t_scale, hp-E[i]*E_scale);
			ctx2.lineTo(dt*(i+1)*t_scale, hp-E[i+1]*E_scale);
			//ctx2.arc(x,y,r,0,2* Math.PI);
		}
		ctx2.stroke();
	}
	function control()
	{
		phys();
		draw();
		//alert('4')
	}
	setInterval(control,1000/fps)
}