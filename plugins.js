$(document).ready(function(){
    $('.carousel').carousel({
    
        interval:3000
    });
   

   //show color option div when click on the gear
   $(".gear-check").click(function()
    {
         $(".color-option").toggle();
       
   });
});