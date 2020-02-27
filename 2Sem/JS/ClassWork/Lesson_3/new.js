window.addEventListener('load', main, false)
function main() {
	var ctx = canv.getContext("2d");
	var w = canv.width;
	var h = canv.height;
//сложности алгоритмов
//теория: о большие
//бинарный поиск 
var M=[-2,-1,0,1,2,3,4,5,6,7];

function binary_search (M, element)//считаем количество элементов массива меньше числа "элементов"
{
	var n=0;
	var min=0;
	var max=M.length-1;
while (min<=max){
	n++;
	
	var i=Math.floor((max+min)/2);//среднее значение
	if(M[i]<element)
	{
		min=i+1;
		
	}
	else if(M[i>element])
	{
		max=i-1;
	}
	else
	{
		return n;
	}
	
}
//return -1;//если не найдет элемент, то вернет -1
return n;
}	
	//console.log(binary_search(M,5))
	
	
	var N=[];
	var T=[];
	var n=1;
	for(var j=0; j<200;j++)
	{
	var M=[];
	
	for(var i=0; i<n;i++)
	{
		M.push(i);
	}
	N.push(Math.log(n));
	T.push(binary_search(M,0));
	n++;}
	console.log(N,T);
	

	for(var i=0;i<N.length;i++){
		ctx.beginPath();
		//ctx.arc(N[i],T[i],3,0,2*Math.PI);
		ctx.arc(N[i]*w/N[j-1],h-T[i]*h/T[j-1],3,0,2*Math.PI);
		ctx.fill();
	}
}