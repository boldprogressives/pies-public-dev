$(document).ready(function(){


var margin = 200;
var t = $("#top-border").offset().top + $("#top-border").outerHeight() - margin;
var b = $("footer").outerHeight() + margin;
var myElement = $('.sidenav');


myElement.affix({
      offset: {
         top: function () {
             return t;
         }
         , bottom: function () {
             return (myElement.hasClass("affix-top")) ? 0 : b;
         }
     }
});

//var sidenavTop = $('.sidenav').offset().top;
//$('.sidenav').affix();
/*  $(window).scroll(function(){

    if($(document).scrollTop() >= sidenavTop){

        if(!$('.sidenav').hasClass('affix')){
            $('.sidenav').removeClass('affix-bottom');
            $('.sidenav').addClass('affix');
            $('.sidenav').css('top', '10px');
        } 
        
        if ($(document).scrollTop() + $('.sidenav').height() >= $(document).height() && !$('.sidenav').hasClass('affix-bottom')){
          console.log($('.sidenav').offset().top);
          $('.sidenav').css('top',  $(window).scrollTop() + 'px');
            $('.sidenav').removeClass('affix');
            $('.sidenav').addClass('affix-bottom');
          }
        
        
      } else if($(document).scrollTop() < sidenavTop){
        if($('.sidenav').hasClass('affix')){
            $('.sidenav').removeClass('affix');
  
        }
        
      }
      
  });
*/
  
});