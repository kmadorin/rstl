$(function(){
    /* Scroll on Top */
    $('.page__totop,.scroll').click(function(e){
      e.preventDefault();
      $('html,body').animate({scrollTop:0},300,'swing');
    });


    $(window).on('scroll', function(){

      var value = $(window).scrollTop();
      // show "scroll to top" button
      if ( value > 200 ){
        $(".page__totop").addClass('page__totop--active');
      } else {
        $(".page__totop").removeClass('page__totop--active');
      }

    });

})
