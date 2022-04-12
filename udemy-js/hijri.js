

function calHijri(year)
{
	var year = prompt('Enter Goergian Year');

	var num = (year-622)*1.031;

	var res = Math.trunc(num);

	return res;
}

// console.log(year);

var Fres = calHijri();
console.log('The Hijri year is ' + Fres);
