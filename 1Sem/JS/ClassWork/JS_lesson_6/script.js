
window.addEventListener('load',main,false);
function main()
{
	
	var ctx=canvas_ex.getContext('2d');
	var h=canvas_ex.height;
	var w=canvas_ex.width;
var x=w/2;
var y=h/2;
var isDrag= false;
var r=100;
	var collor='black';
	var offset={x:0,y:0};
	function circle(x,y,c)// функция отвечающая за круг
	{
		canvas_ex.width=canvas_ex.width;
		ctx.fillStyle=c;
		ctx.beginPath();
		ctx.arc(x,y,r,0,2*Math.PI);
		ctx.fill();
	}
	function getMouseCoords (e)// получить координаты курсора
	{
		var m={};
		var rect=canvas_ex.getBoundingClientRect();
		m.x=e.clientX-rect.left;// разница между углом экрана и канвасом
		m.y=e.clientY-rect.top;
		return m;
	}
	
	/*canvas_ex.onclick= function(e)
	{
		var m= getMouseCoords(e);
		ctx.beginPath();
		ctx.arc(m.x,m.y,100,0,2*Math.PI);
		ctx.fill();
	}*/
	canvas_ex.onmousedown=function(e)//факт нажатия мыши
	{
		var m=getMouseCoords(e);
		
		if((m.x-x)*(m.x-x)+(m.y-y)*(m.y-y)<=r*r)
		{
		isDrag=true;
		
		offset.x=m.x-x;
		offset.y=m.y-y;
		}
	}
	
	function getRandomCollor()// случайный цвет
	{
		// 3 значения цвета задающиеся случайно
		return "rgb("+Math.round(255*Math.random())+","+Math.round(255*Math.random())+","+Math.round(255*Math.random())+")";
	}
	
	canvas_ex.onmousemove=function(e)//движение мыши
	{
		
		var m=getMouseCoords(e);
		if(isDrag){
			x=m.x-offset.x;
		y=m.y-offset.y;
		circle(x,y,getRandomCollor());
		}
	}
	canvas_ex.onmouseup=function(e)//поднятие мыши
	{
		isDrag=false;
	}
circle(x,y, 'black');	
}