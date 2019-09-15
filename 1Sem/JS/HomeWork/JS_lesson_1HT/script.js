window.addEventListener('load',main,false);
function main()
{
	var a1=0;
	var b1=0;
	var c=0;
	var znak='';
	var i=0;
	
	/*var buttons = document.querySelectorAll("button");
	function Fun(e) {
       
	   some_span.innerHTML+=Math.random();
       //     num1.innerHTML=parseInt(e.target.id);
        /*
		else
		{
            if (this.id.length === 6)
			{
				if(i>0)
				{
					
				}
				a1=parseFloat(num1.value);
				num1.innerHTML=0;
                znak=this.value
				i+=1;
			}
			else
			{
				
			}
        }
		
		
    };
	for (var i = 0, i < buttons.length; i++) 
	{
		//if(buttons[i].id.length==4){}
		buttons[i].addEventListener("click",Fun);
	}*/
	
	
	btn1.onclick=function()//обратиться к спену с html
	{
		some_span.innerHTML+='1';
	}
	btn2.onclick=function()//обратиться к спену с html
	{
		some_span.innerHTML+='2';	
	}
	btn3.onclick=function()//обратиться к спену с html
	{
		some_span.innerHTML+='3';
	}
	btn4.onclick=function()//обратиться к спену с html
	{
		some_span.innerHTML+='4';
	}
	btn5.onclick=function()//обратиться к спену с html
	{
		some_span.innerHTML+='5';
	}
	btn6.onclick=function()//обратиться к спену с html
	{
		some_span.innerHTML+='6';
	}
	btn7.onclick=function()//обратиться к спену с html
	{
		some_span.innerHTML+='7';
	}
	btn8.onclick=function()//обратиться к спену с html
	{
		some_span.innerHTML+='8';
	}
	btn9.onclick=function()//обратиться к спену с html
	{
		some_span.innerHTML+='9';
	}
	btn0.onclick=function()//обратиться к спену с html
	{
		some_span.innerHTML+='0';
	}
	btnT.onclick=function()//обратиться к спену с html
	{
		if(i==0)some_span.innerHTML+='.';
		
		i=1;
	}
	
	btnD.onclick=function()//обратиться к спену с html
	{
		a1=some_span.innerHTML;
		some_span.innerHTML='';
		znak='D';
		i=0;
	}
	btnY.onclick=function()//обратиться к спену с html
	{
		a1=some_span.innerHTML;
		some_span.innerHTML='';
		znak='Y';
		i=0;
	}
	btnM.onclick=function()//обратиться к спену с html
	{
		a1=some_span.innerHTML;
		some_span.innerHTML='';
		znak='M';
		i=0;
	}
	btnP.onclick=function()//обратиться к спену с html
	{
		a1=some_span.innerHTML;
		some_span.innerHTML= '';
		znak='P';
		i=0;
	}
	btnR.onclick=function()//обратиться к спену с html
	{
		b1=parseFloat(some_span.innerHTML);
		a1=parseFloat(a1);
		some_span.innerHTML='';
		c=a1+b1;
		i=0;
		
		switch(znak) 
		{
		case 'D':
		c=a1/b1;
		break;
		case 'Y':
		c=a1*b1;
		break;
		case 'M':
		c=a1-b1;
		break;
		case 'P':
		c=a1+b1;
		break;
		case '':
		c=0;
		break;
		
		}
		some_span.innerHTML=c;
	}
	btnBackS.onclick=function()
	{
		some_span.innerHTML='';
		
		
	}
	
}
//random rnd(var a,var b)
//{
	//var c= a+Math.random()*(a+b);
	//return c;
//}