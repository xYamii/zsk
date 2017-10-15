function isInt(n){
    return (Number(n) === n && n%1 ===0);
    
}   
var liczba = Math.floor((Math.random() * 900) + 100);
var n=0;
function sprawdz(){
    var licz = Number (document.getElementById("pole").value);
    if(isInt(licz)== true){
        if(liczba==licz){
            document.write("<h1>Brawo zgadłeś po  "+n+" próbach</h1>")
        }
        else 
            {
        document.getElementById("pole").value=" ";
                n=n+1;
            }
    }
    else
        {
            alert("Podana wartość nie może zostać zinterpretowana jako liczba całkowita")
        }
    
}
