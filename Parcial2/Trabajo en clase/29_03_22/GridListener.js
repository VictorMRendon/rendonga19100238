window.onload = function() 
{
    document.getElementById("idcont"). addEventListener("click", function(e) {
        document.getElementById(event.target.id).classList.toggle("cajaSel");
        if(event.target.id == "idcont"){
            document.getElementById(event.target.id).classList.toggle("fondo");
        }
       console.log(event.target.id);
    });
}