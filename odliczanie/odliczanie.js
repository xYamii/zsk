
function d() 
{
    
i= Number(document.getElementById("pole").value);

if (i>0) {
           x= setInterval(odliczanie,1000);
document.write('<style>body{margin:0 auto;}#pole{border: 0;background-color: lightyellow;color:blue}      #liczenie{background-color:grey;width:200px;height:400px;padding:5%;color:yellow;font-weight: bold;text-align:center;font-size:20px;}#anuluj, #wznow {width:50px; height:20px; background-color:red; font-size:10px;border:0;outline:1px solid gold;}</style>');
document.write(' <div id="liczenie">')
document.write('<h3 id="odlicz"> Odliczanie: </h3>');
document.write('<p id="liczba">'+i+'</p>');
document.write(' <p id="but"><button id="anuluj" onclick="stop()">anuluj</button></p>');
document.write(' </div>')
}
    else{
       alert("Podaj prawidłową liczbę");
}
}
function odliczanie(){
        if(i>0)
        {
              i=i-1;
    document.getElementById("liczba").innerHTML=i;
  
        }
    else{
            window.close();
        
    }
}

    function stop(){
        clearInterval(x);
	document.getElementById("odlicz").innerHTML=('<h1"> Odliczanie zatrzymane </h1>');
	document.getElementById("but").innerHTML=(' <button id="wznow" onclick="wznow()">Wznów</button>');
    }  
function wznow(){
        x= setInterval(odliczanie,1000);
	document.getElementById("odlicz").innerHTML=('<h1"> Odliczanie: </h1>');
	document.getElementById("but").innerHTML=(' <button id="anuluj" onclick="stop()">anuluj</button>');
    }
