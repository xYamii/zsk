function d(){
a= Number(document.getElementById("pierwsza").value);
b= Number(document.getElementById("druga").value);
var selekt = document.getElementById("selekt");
var e = selekt.options[selekt.selectedIndex].value;
var wynik;
if(a=="" || b==""){
	alert("Wpisz obie liczby");}
else{
if(e=="dodawanie")
{
	wynik=a+b;
	document.getElementById("wynik").value=+wynik;
}
else if(e=="odejmowanie"){
	wynik=a-b;
	document.getElementById("wynik").value=wynik;
}
else if(e=="mnozenie"){
	wynik=a*b;
	document.getElementById("wynik").value=wynik;
}
else if(e=="dzielenie"){
	wynik=a/b;
	document.getElementById("wynik").value=wynik;
}
else if(e=="modulo"){
	wynik=a%b;
	document.getElementById("wynik").value=wynik;
}
else{
	alert("pls wybierz dzialanie");

}
}
}
