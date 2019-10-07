window.addEventListener('load',main,false);
function main()
{
	// тип переменной можно посмотеть через typeof
	
	console.log(typeof(1));// wba
	console.log(typeof('1'));
	console.log(typeof(null));
	console.log(typeof({}));
	console.log(typeof([]));
	console.log(typeof(undefined));
	console.log(typeof(true));
	console.log(typeof(main))
	
	console.log(1=='1');
	console.log(1==='1'); //строгое сравнение
	console.log(null==undefined);
	console.log(1<'2');
	console.log(1>2);
	
console.log(true||false);
console.log(true&&false);
console.log(!true);

var height_my=170;
var min_heigth=120;


if(min_heigth>height_my)
	console.log('nini');
else
	console.log('ok')
console.log('------------------------');
//циклы
var N=10;
for(var i=0;i<N;i++)
{
	console.log(i*i);
	
}
console.log('------------------------');
var N=20;
	var ctx=canvas_ex.getContext('2d');
	var h=canvas_ex.height;
	var w=canvas_ex.width;
	for(var i=0;i<N;i++)
	{console.log('------------------------');
		ctx.beginPath();
		ctx.arc(i*10,250,30,0,2*Math.PI);
		ctx.stroke();
	}
	
	var dt=0.1;
	var t_max= 2*Math.PI;
	var a=100;
	var b=200;
	for(var i= 0;i<t_max;i+=dt)
	{
		ctx.beginPath();
		ctx.arc(w/2+a*Math.cos(i),h/2-b*Math.sin(i),5,0,2*Math.PI);
		ctx.stroke();
	}
	//массивы
	console.log('массивы');
	var mass=['q','a','w','r','e'];
	console.log(mass);
	mass.push('r');//добавить новый элемент в коннец массива
	console.log(mass);
	
	var a=[];
	for(var i=0;i<10;i++)
	{
		a.push(i*i);
		console.log(a[i]);
	}
	console.log(a);
	//функции
	
	console.log('-----------');
	function isEven(x)
	{
		result=(x%2)==0;// провекрка на четность %- остаток от деления
		return result;
	}
	console.log(isEven(1));
	console.log(isEven(2));
	
	
	
	
	
	
	
	
	
	
	/*ctx=canvas_ex.getContext('2d');
	h=canvas_ex.height;
	w=canvas_ex.width;*/
}
