window.addEventListener('load',main,false);
function main()
{
	var a=1;
	var b='1';
	console.log(a);
	console.log(b);
	console.log(parseInt(a)+parseInt(b));
	console.log(b-a);
	
	console.log(111111);
	
	console.log(Math.sin(a));
	console.log(Math.cos(a));
	console.log(Math.PI);
	
	console.log(Math.random());
	//var c= rnd(4,5);
	//console.log(c);
	
	some_button.onclick=function()//обратиться к спену с html
	{
		var number=parseFloat(some_input.value)
		some_span.innerHTML=number+5*Math.random();
	}
	
}
//random rnd(var a,var b)
//{
	//var c= a+Math.random()*(a+b);
	//return c;
//}