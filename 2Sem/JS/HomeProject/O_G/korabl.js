/*class korabl{
	constructor(c,size,napr,ctx,w,h,x, y){					//Конструктор поле, размеры поля
		this.size=size;
		this.ctx = ctx;
		this.h=h;
		this.w=w;
		this.x = x;
		this.y = y;
		this.c=c
		this.napr=napr;
	}
	select1()
	{
		var n=this.w/10;
		var l=this.y/10;
		var rx=Math.trunc(this.x/n);
		var ry=Math.trunc(this.y/l);
		for(var i=0; i< this.size; i++)
		{
			if(this.napr=="x")
			{
				this.c[rx+i][ry]=1;
				console.log(this.c[rx+i][ry])
				
			}
			else
			{
				this.c[rx][ry+i]=1;
			}
		}
		return this.c
		
	}
}