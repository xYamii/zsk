function d() {

var i=prompt("Podaj liczbe");
i=parseInt(i);
function odliczanie(){
        if(i>0)
        {
              i=i-1;
    document.getElementById("paragraf").innerHTML=i;
  
        }
    else{
            window.location = "http://www.zsk.poznan.pl";
        
    }
}
document.getElementById("paragraf").innerHTML=i;
setInterval(odliczanie,1000); 
}