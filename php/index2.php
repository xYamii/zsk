<?php
$l1 = 1;
$l2 = 5;
echo $l1*$l2."</br>";
define("imie","Jan Kowalski");
define ("rok",1981);
$zawod="Informatyk";
$wiek="31";
print imie."</br>";
print $zawod."</br>";
print "rocznik -".rok."</br>";
print $wiek." lat</br>";
//komentarz jednoliniowy
#komnetarz jednoliniowy
/* komentarz
wieloliniowy */
echo "echo</br>";
print "echo"." no "."echooo</br>"; //z "," nie działa
//echo "<img src=obrazek.png></br>";
$x=5;
$y=2;
function zmienna()
{	
	global $x, $y; //dzięki słowu global mozna się odwołać do zmiennych zadelkarowanych poza funkcją
	$GLOBALS['y']=$GLOBALS['y']+$GLOBALS['x']; //do stosowania na tablicach
	// echo $x*$y."</br>";
	$z=3;
	echo "zmienna =".$z;	
}
zmienna();//trzeba zmienną dać w środku funkcji
echo "</br>";
echo "zmienna =".$x."</br>";/* nie można wywoływać zmiennej 
który została zadeklarowana poza funkcją w funkcji */
function zmienne()
{
	static $x=0; //static powoduje, że po wykonaniu funkcji zmienna nie jest usuwana
	echo$x;
	$x++;
}
zmienne();
zmienne();
zmienne();
echo "</br>";
$kolor=array("czerwony","niebieski","zielony");
var_dump($kolor); //zwraca typ danych i wartość zmiennej
echo "</br>";
echo strlen("klasa")."</br>"; //zwaraca długoś łańcucha znaków
echo str_word_count("klasa 4 d")."</br>"; //zwraca ilość słów
echo strrev ("klasa")."</br>"; //słowo od tyłu
echo strpos ("klasa druga", "druga")."</br>"; //na której pozycji znajduję się dane słowo tu "druga"
echo str_replace ("druga","trzecia","klasa druga")."</br>" //zamienia miejscem słowa (najpierw co,na co,potem słowa)
?>