$(document).ready(function(){

var sidenavTop = $('.sidenav').offset().top;

  $(window).scroll(function(){

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

  
});