window.addEventListener('load', main, false)
function main() {
	var ctx = canv.getContext("2d");
	var w = canv.width;
	var h = canv.height;
	
	var M=[9,8,7,6,5,4,3,2,1];
var t=performance.now();
	// stupid sort
	var i=0;
	while (true)
	{
		if(M[i]>M[i+1])
		{
			var tmp= M[i];
			M[i]=M[i+1];
			M[i+1]=tmp;
			i=0;
		}
		else{
			i++;
		}
		if(i==M.length-1)
	
	{
		break;
	}}
	console.log(performance.now()-t);
	console.log(M);

//gnome sort
	var i=0;
	var t=performance.now();
	while (true)
	{
		if(M[i]>M[i+1])
		{
			var tmp= M[i];
			M[i]=M[i+1];
			M[i+1]=tmp;
			i--;
		}
		else{
			i++;
		}
		if(i==M.length-1)
	
	{
		break;
	}}
	console.log(performance.now()-t);
	console.log(M);

//pusirek


	var i=0;
	var n=0;
	var t=performance.now();
	while (true)
	{
		i++;
		if(M[i]>M[i+1])
		{
			var tmp= M[i];
			M[i]=M[i+1];
			M[i+1]=tmp;
		}
		
		if(i==M.length-1-n){
		n++;
		i=0;}
		if(n==M.length-1)
		{break;}
	}
	console.log(performance.now()-t);
	console.log(M);

	var i=0;
	var n=0;
	var flag=true;;
	var t=performance.now();

	//shaker sortw
	while (flag)
	{
		
		flag=false;
		for( var i=n; i<M.length-1-n; i++)
		{
		if(M[i]>M[i+1])
		{
			var tmp= M[i];
			M[i]=M[i+1];
			M[i+1]=tmp;
			flag=true;
		}	
		}
		for( var i=M.length-1-n; i>n;i--)
		{
		if(M[i]<M[i-1])
		{
			var tmp= M[i];
			M[i]=M[i-1];
			M[i-1]=tmp;
			flag=true;
		}	
		}
		n++;
		
	}
	console.log(performance.now()-t);
console.log(M);

}