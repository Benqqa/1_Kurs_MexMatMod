window.addEventListener('load',main,false);
function main()
{
	var ctx=canvas_ex.getContext('2d');
	var h=canvas_ex.height;
	var w=canvas_ex.width;
	
	
	
	var m=50;
	var massYY=[m];
	var px=w/m;
	var py=h/m;
	
	p(0,0,0,0);
var x111,y111;
	
	canvas_ex.onmousemove = function GdeKursor (e) //крсор
	{
      // в "e"  попадает экземпляр MouseEvent
      var x = e.offsetX;
      var y = e.offsetY;
      var dx = e.movementX;
      var dy = e.movementY;
	  var x111=w/-2;
	  var y111=h/-2;
 
      // Проверяем зажата ли какая-нибудь кнопка мыши
      // Если да, то рисуем
      if (e.buttons > 0) {
        /*ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - dx, y - dy);
        ctx.stroke();*/
		
		canvas_ex.width = canvas_ex.width;
		
		
		x111+=+x;
		y111+=y;
		p(x111,y111,dy,dx);
		G(x111,y111);
		ctx.stroke();
		
		
        //ctx.closePath();
      }
	  
	  
	  
    }

	
	
	function p(x,y,dy,dx)//отрисовка осей
	{
		ctx.clearRect(0,0,canvas_ex.width,canvas_ex.height);
		
	    ctx.fillText("X",w-px,h/2-py/2+(y));										//названия осей
		ctx.fillText("Y",w/2-px+(x ),py);
		/*var massY=[];
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
			k++; 
		}
	   //h=max;

		ctx.stroke();
		ctx.beginPath();
		ctx.lineWidth='1';
		*/
		ctx.strokeStyle='black';
		ctx.moveTo(-w+(x ),(h/2)+(y));
		ctx.lineTo(2*w+(x ),(h/2)+(y));
	
		ctx.moveTo((w/2)+(x ),-h+(y));
		ctx.lineTo((w/2)+(x ),2*h+(y));
		ctx.stroke();
		
		for(var i=-m; i<=2*m;i++)
		{
			ctx.moveTo(i*px+(x ),h/2-2+(y));
			ctx.lineTo(i*px+(x ),h/2+2+(y));
			if(i<=0)
			{
			ctx.fillText(-1*i, ((w)/2)-(i*px)-px/2+(x ), h/2+10+(y));
			ctx.fillText(i,w/2+10 +(x ),((h)/2)-(i*py) +(y));
			ctx.fillText(-1*i,w/2+10+(x ) ,((h)/2)+(i*py)+(y));
			ctx.fillText(i, w/2+(i*px)+(x ), h/2+10+(y));
			}		
		 ctx.moveTo(w/2-2+(x ),i*px+(y));
	     ctx.lineTo(w/2+2+(x ),i*px+(y));
		}
		 ctx.stroke();
	}
	function F()// забить масив, найти максимум
	{
		
		m=50;
		var k1=txt1.value;
	    var k2=txt2.value;
	    var k3=txt3.value;
	    var k4=txt4.value;
		var y;//
		var maxV=((m/-2)*(m/-2)*(m/-2)*k1)+(((m/-2)*(m/-2)*k2)+((m/-2)*k3)+k4);
		var minV=((m/-2)*(m/-2)*(m/-2)*k1)+(((m/-2)*(m/-2)*k2)+((m/-2)*k3)+k4);
		//var MMM;
		for(var i=(m/-2); i<(m/2);i+=px/m)
		{
			massYY[i+(m/2)]=i*i*i*k1+i*i*k2+i*k3+k4;
			if(massYY[i+(m/2)]>maxV)
			{
				maxV=massYY[i+(m/2)];
			}
			if(massYY[i+(m/2)]<minV)
			{
				minV=massYY[i+(m/2)];
			}
		}
		//if(Math.abs(minV)>Math.abs(maxV))
		//{MMM=minV;}
	    //else{MMM=maxV}
		
		//return MMM;
	}
	
	function G(x,y1)// отрисовка графика
	{
		
		y=massYY[0];
		ctx.moveTo((w/2)+(m/-2)+(x),(h/2)+(y*py*(-1))+(y1));
		for(var i=(m/-2);i<=m/2;i+=py/m)
	    {	
	     y=massYY[i+(m/2)];
		 x11=w/2+(i*px)+(x);
		 y11=h/2+(y*py*(-1))+(y1);
		 ctx.strokeRect(x11,y11,1,1);
		 ctx.lineTo(x11,y11);
	    }
	   ctx.stroke();
	}
	
	btn1.onclick=function()
	{/*
		ctx.beginPath();
		ctx.lineWidth='1';
	    ctx.strokeStyle='green';
		ctx.clearRect(0,0,canvas_ex.width,canvas_ex.height)// обновление хослтса
		p();
		
		y=F(m/-2);
	    ctx.moveTo(w/2+(m/-2),h/2+y*py*-1);
	    for(var i=(m/-2);i<=m/2;i+=py/m)
	    {	
	     y=F(i);
		 x11=w/2+(i*px);
		 y11=h/2+(y*py*-1);
		 ctx.strokeRect(x11,y11,1,1);
		 ctx.lineTo(x11,y11);
	    }
	   ctx.stroke();
	   */
	   ctx.clearRect(0,0,canvas_ex.width,canvas_ex.height);
	   canvas_ex.width = canvas_ex.width;
	   p(0,0,0,0);
	   F();
	   G(0,0);
	}
	/*function Max(d)
	{
		var k1=txt1.value;
	    var k2=txt2.value;
	    var k3=txt3.value;
	    var k4=txt4.value;
		var y;//
		var maxV;
		maxV=((-1)*(d/2)*(-1)*(d/2)*(-1)*(d/2)*k1)+((-1)*(d/2)*(-1)*(d/2)*k2)+((-1)*(d/2)*k3)+k4);
		for(var i=-1*(d/2); i<d;i+=0.1)
		{
			y=i*i*i*k1+i*i*k2+i*k3+k4;
			if(y>maxV)
			{
				maxV=y;
			}
			
		}
		
		return maxV;
	}*/
	
	
}
