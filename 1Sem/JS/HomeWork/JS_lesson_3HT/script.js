window.addEventListener('load',main,false);
function main()
{
	var ctx=canvas_ex.getContext('2d');
	var h=canvas_ex.height;
	var w=canvas_ex.width;
	
	
	
	var m=50;
	var px=w/m;
	var py=h/m;
	p();

	btn1.onclick=function()
	{
		ctx.beginPath();
		ctx.lineWidth='1';
	    ctx.strokeStyle='green';
		ctx.clearRect(0,0,canvas_ex.width,canvas_ex.height)// обновление хослтса
		p();
		
		y=F(m/-2);
	   ctx.moveTo(w/2+(m/-2),h/2+y*py*-1);
	   for(var i=(m/-2);i<=m/2;i+=0.1)
	    {		 
	     y=F(i);
		 x11=w/2+(i*px);
		 y11=h/2+(y*py*-1);
		 ctx.strokeRect(x11,y11,1,1);
		 ctx.lineTo(x11,y11);
	    }
	   ctx.stroke();
	}	
	function F(x)
	{
		var k1=txt1.value;
	    var k2=txt2.value;
	    var k3=txt3.value;
	    var k4=txt4.value;
	    
	
		var y;//
		
		y=x*x*x*k1+x*x*k2+x*k3+k4;
		return y;
	}
	function p()//отрисовка осей
	{
		
		
	    ctx.fillText("X",w-px,h/2-py/2);										//названия осей
		ctx.fillText("Y",w/2-px,py);
		var massY=[];
		var k=0;
		var max,min;
		for(var i=(m/-2);i<=m/2;i+=0.1)
	    {
			massY[k]=F(i);
			if(massY[k]>massY[k+1])
			{
				max=massY[k];
			}
			else min=massY[k];
	   k++; }
	   //h=max;
		
		
		
		
		
		
		ctx.stroke();
		ctx.beginPath();
		ctx.lineWidth='1';
	ctx.strokeStyle='black';
	ctx.moveTo(0,h/2);
	ctx.lineTo(w,h/2);
	
	ctx.moveTo(w/2,0);
	ctx.lineTo(w/2,h);
	ctx.stroke();
		
		for(var i=0; i<=m;i++)
	{
	 ctx.moveTo(i*px,h/2-2);
	 ctx.lineTo(i*px,h/2+2);
	 if(i<=m/2)
		{
			ctx.fillText(-1*i, ((w)/2)-(i*px)-px/2, h/2+10);
			ctx.fillText(i,w/2+10 ,((h)/2)-(i*py) );
			ctx.fillText(-1*i,w/2+10 ,((h)/2)+(i*py));
			ctx.fillText(i, w/2+(i*px), h/2+10);
		}		
		 ctx.moveTo(w/2-2,i*px);
	     ctx.lineTo(w/2+2,i*px);
    }
		 ctx.stroke();
	}
}
