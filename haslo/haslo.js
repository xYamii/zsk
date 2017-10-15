    var attempts = 3;
function check() {
    var password = document.getElementById("pass").value;
    if(password != "haslo")
    {
        attempts=attempts-1;
        if(attempts>0)
            {
                document.getElementById("a").innerHTML = ("Masz jeszcze " +attempts+" próby");
            }
        else
        {
                window.close;    
            }
    }
    else{
         window.location = "http://www.zsk.poznan.pl";
        }

}

    document.getElementById("but").onclick = function() {check()};

