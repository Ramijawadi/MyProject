$(document).ready(function(){

  //nice scroll
 $("html").niceScroll();

    $('.carousel').carousel({
    
        interval:2000
    });

    $(".gear-check").click(function()
    {
         $(".color-option").fadeToggle();
       
   });



   //changer theme color on click  using JQuery
var colorLi= $(".color-option ul li");


  colorLi
   .eq(0).css("backgroundColor","#E41B17").end()
   .eq(1).css("backgroundColor","#3d36bd").end()
   .eq(2).css("backgroundColor","#117952").end()
   .eq(3).css("backgroundColor","#09b3c3f2");

    colorLi.click(function() 
    {
    $("link[href*='theme']").attr("href",$(this).attr("data-value"));
    });

    var scrollButtom=$("#scroll-top");

    $(window).scroll(function()
{
 
  if( $(this).scrollTop() >= 700)
{
  scrollButtom.show();
}
else
{
  scrollButtom.hide();
}
});
//click on button to scroll  top

scrollButtom.click(function()
{
    $("html,body").animate({ scrollTop : 0 },600);
    


});

wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();

});








