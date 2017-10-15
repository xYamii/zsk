function d(){
a= Number(document.getElementById("pierwsza").value);
b= Number(document.getElementById("druga").value);
var selekt = document.getElementById("selekt");
var e = selekt.options[selekt.selectedIndex].value;
console.log(e);

if(e=="dodawanie")
{
	dodawanie(a,b);
	document.getElementById("wynik").value=+wynik;
}
else if(e=="odejmowanie"){
	odejmowanie(a,b);
	document.getElementById("wynik").value=wynik;
}
else if(e=="mnozenie"){
	mnozenie(a,b);
	document.getElementById("wynik").value=wynik;
}
else if(e=="dzielenie"){
	dzielenie(a,b);
	document.getElementById("wynik").value=wynik;
}
else if(e=="modulo"){
	modulo(a,b);
	document.getElementById("wynik").value=wynik;
}
else{
	alert("pls wybierz dzialanie");

}
}
function dodawanie(){
	wynik=a+b;
	return wynik;
}
function odejmowanie(){
	wynik=a-b;
	return wynik;
}
function mnozenie(){
	wynik=a*b;
	return wynik;
}
function dzielenie(){
	wynik=a/b;
	return wynik;
}
function modulo(){
	wynik=a%b;
	return wynik;
}
    //why not working when form is in html