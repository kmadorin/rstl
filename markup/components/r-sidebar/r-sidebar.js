// fixed sidebar

$(function(){
  var sidebarTop = $('.l-page__sidebar').offset().top;

  $(window).scroll(function(e){
    viewportScale = screen.width / window.innerWidth;

    // if (viewportScale === 1) {
      if (sidebarTop-12 < $(this).scrollTop()) {
        if (!$('.r-sidebar').hasClass('r-sidebar--fixed')) {
          $('.r-sidebar')
            .addClass('r-sidebar--fixed');
        }
      } else {
        if ($('.r-sidebar').hasClass('r-sidebar--fixed')) {
          $('.r-sidebar').removeClass('r-sidebar--fixed');
        }
      }
    // }
    // else {
    //   if (sidebarTop-12 < $(this).scrollTop()) {
    //     if (!$('.r-sidebar').hasClass('r-sidebar--absolute')) {
    //       $('.r-sidebar')
    //         .addClass('r-sidebar--absolute')
    //     }
    //     $('.r-sidebar').css("top", ($(this).scrollTop()-sidebarTop+12)+"px");
    //   } else {
    //     if ($('.r-sidebar').hasClass('r-sidebar--absolute')) {
    //       $('.r-sidebar').removeClass('r-sidebar--absolute');
    //     }
    //   }
    // }
  });
});
