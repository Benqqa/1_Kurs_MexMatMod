window.addEventListener('load',main,false);
function main() {
	
	var str = '\tI\'m JavaScript\n developer'; //заголовок строк
	console.log(str); //выводит строку
	console.log('\\'); //выводит "\\"
	console.log(str.length); //выводит длину строки
	console.log(str[6]); //выводит шестой элемент строки
	console.log(str+'\\'); //выводит строкиу и "\\"
	str = 'You shell not pass'; //сама строка	
	console.log(str.indexOf('not')); //выводит номер элемента, который соответствует слову "not". если несколько - выведет первый. 
	console.log(str[10]); //десятый элемент
	console.log(str.indexOf('s')); // начинает поиск с начала, ищет s
	console.log(str.indexOf('s',6)); //начинаем поиск подстроки s начиная с 6ого элемента	
	console.log(str.lastIndexOf('s')); //подстроку s начиная с конца строки
	console.log(str.toLowerCase()); //переводит в нижний регистр
	console.log(str.toUpperCase()); //переводит в верхний регистр
	console.log(str.substring(4,7)); //выведет 4,5,6, элементы 
	console.log('2'>'14'); //выводит правда/ложь, сравнивая строки
	//самостоятельное задание: убрать значок доллара
	function extract(value) {
		var x = value.indexOf('$'); //задаем то, что будем искать
		return(value.substring(0,x)+value.substring(x+1,(value.length))); //магия
	}
	console.log(extract('$120'));
	console.log(extract('30$'));
}
	