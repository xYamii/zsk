    var a=1;
    var gra=true;
function z(pole){
    if(gra==true){
    //console.log(pole.src);
    if(pole.src.indexOf("blank.png")>=0)
    {
        a++;
    if(a%2==0)
 pole.src="cross.png";
    else {
         pole.src="circle.png";
         }
    }
        else
        alert("To pole jest juz zajete");
    //sprawdzenie kolumn
var s = sprawdz();
if (s==1)
{
	alert("Krzyżyk wygrał, koniec gry");
	gra=false;
}
else if (s==2){
alert("Kółko wygrało, koniec gry");
gra=false;}
}
}
function sprawdz (){
	for (var i=1; i<=3; i++)
{
k1=1+(i-1);
k2=4+(i-1);
k3=7+(i-1);
if(document.getElementById("p"+k1).src==document.getElementById("p"+k2).src && document.getElementById("p"+k2).src==document.getElementById("p"+k3).src ){
	if(document.getElementById("p"+k1).src.indexOf("cross.png")>=0){
		return 1;
	}
	else if(document.getElementById("p"+k1).src.indexOf("circle.png")>=0){
		return 2;
	}
}

	}
for (var i=1; i<=3; i++)
{
k1=(i-1)*3+1;
k2=(i-1)*3+2;
k3=(i-1)*3+3;
if(document.getElementById("p"+k1).src==document.getElementById("p"+k2).src && document.getElementById("p"+k2).src==document.getElementById("p"+k3).src ){
		if(document.getElementById("p"+k1).src.indexOf("cross.png")>=0){
		return 1;
	}
	else if(document.getElementById("p"+k1).src.indexOf("circle.png")>=0){
		return 2;
	}
}}
if(document.getElementById("p1").src==document.getElementById("p5").src && document.getElementById("p5").src==document.getElementById("p9").src || document.getElementById("p3").src==document.getElementById("p5").src && document.getElementById("p5").src==document.getElementById("p7").src){
		if(document.getElementById("p5").src.indexOf("cross.png")>=0){
		return 1;
	}
	else if(document.getElementById("p5").src.indexOf("circle.png")>=0){
		return 2;
	}
}
}