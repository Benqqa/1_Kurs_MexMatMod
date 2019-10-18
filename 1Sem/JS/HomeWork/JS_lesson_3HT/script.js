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
	var x111,y111;
	p(0,0,0,0);
	
	canvas_ex.onmousemove = function GdeKursor (e) //крсор
	{
      var x = e.offsetX;
      var y = e.offsetY;
      var dx = e.movementX;        //ловим курсор и находим его координаты
      var dy = e.movementY;
	  var x111=w/-2;
	  var y111=h/-2;
 
      // Проверяем зажата ли какая-нибудь кнопка мыши
      if (e.buttons > 0) 
	  {
		canvas_ex.width = canvas_ex.width;	
		x111+=+x;
		y111+=y;
		p(x111,y111,dy,dx);
		G(x111,y111);
		ctx.stroke();
      }	  
    }
	function p(x,y,dy,dx)//отрисовка осей
	{
		ctx.clearRect(0,0,canvas_ex.width,canvas_ex.height);//очистака
	    ctx.fillText("X",w-px,h/2-py/2+(y));										//названия осей
		ctx.fillText("Y",w/2-px+(x ),py);

		ctx.strokeStyle='black';
		ctx.moveTo(-w+(x ),(h/2)+(y));
		ctx.lineTo(2*w+(x ),(h/2)+(y));//линии осей
		ctx.moveTo((w/2)+(x ),-h+(y));
		ctx.lineTo((w/2)+(x ),2*h+(y));
		ctx.stroke();
		
		for(var i=-m; i<=2*m;i++)
		{
			ctx.moveTo(i*px+(x ),h/2-2+(y));
			ctx.lineTo(i*px+(x ),h/2+2+(y));                   //штришки на оси
			ctx.moveTo(w/2-2+(x ),i*px+(y));
			ctx.lineTo(w/2+2+(x ),i*px+(y));
			
			if(i<=0)
			{
				ctx.fillText(-1*i, ((w)/2)-(i*px)-px/2+(x ), h/2+10+(y));
				ctx.fillText(i,w/2+10 +(x ),((h)/2)-(i*py) +(y));         //отрисовка циферок
				ctx.fillText(-1*i,w/2+10+(x ) ,((h)/2)+(i*py)+(y));
				ctx.fillText(i, w/2+(i*px)+(x ), h/2+10+(y));
			}		
		 
		}
		 ctx.stroke();
	}
	
	function F()// забить масив
	{
		var k1=txt1.value;
	    var k2=txt2.value;
	    var k3=txt3.value;
	    var k4=txt4.value;
		for(var i=(m/-2); i<(m/2);i+=px/m)
		{
			massYY[i+(m/2)]=i*i*i*k1+i*i*k2+i*k3+k4;
		}
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
	
	btn1.onclick=function()//нажатие на кнопку
	{
	   ctx.clearRect(0,0,canvas_ex.width,canvas_ex.height);
	   canvas_ex.width = canvas_ex.width;
	   p(0,0,0,0);
	   F();
	   G(0,0);
	}
}
