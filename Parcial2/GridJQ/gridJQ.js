$(document).ready(function()
{
    $('#idcont').click(function(e){
       console.log(e); 
       $(e.target).toggleClass('cajaSel');
    });
});