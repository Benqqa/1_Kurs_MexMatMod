window.addEventListener('load',main,false);
function main()
{
	ctx=canvas_ex.getContext('2d');
	h=canvas_ex.height;
	w=canvas_ex.width;
	//прямоугольник
	ctx.fillStyle='green';
	ctx.fillRect(101,300,20,20);
	ctx.strokeRect(79,300,20,20);
	
	//стиль
	ctx.lineWidth='5';
	ctx.strokeStyle='red';
	//line
	ctx.beginPath();//начни рисовать
	ctx.moveTo(100,200);//координата начала
	ctx.lineTo(100,300);//коорддината конца
	
	
	ctx.lineTo(300,100);//коорддината конца
	
	ctx.arc(w/2,h/2,50,0,0.5*Math.PI,);
	ctx.stroke();//обвести
	
	/*
		some_button.onclick=function()//обратиться к спену с html
	{
		var number=parseFloat(some_input.value)
		some_span.innerHTML=number+5*Math.random();
	}
*/	
}
