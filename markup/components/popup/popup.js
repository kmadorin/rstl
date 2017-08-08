// Popup scripts
$(function(){

  function getScrollWidth() {
    var div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    var scrollWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);

    return scrollWidth;
  }

  function showPopup(popup,top) {

    popup.addClass('popup__wrapper--active').css("top", top);
    // $('body,html').css({'overflow': "hidden", "position":"relative", "height":"100%"});
    $('body,html').css({'overflow': "hidden"});
    $('body').css({"padding-right": getScrollWidth()});
    $('.page__totop').css({"right": 15+getScrollWidth()+"px"});
  }

  function hidePopup(popup) {
    popup.removeClass('popup__wrapper--active');
    $('body,html').css({'overflow': "auto", "position":"static", "height":"auto"});
    $('body').css({"padding-right": "0"});
    $('.page__totop').css({"right": "15px"});
  }


  $('.popup__wrapper').click(function(e){
    if ($(e.target).closest('.popup').length===0) {
      hidePopup($(this));
    }
  });
  $('.popup__close').click(function(e){
    e.preventDefault();
    hidePopup($('.popup__wrapper--active'));
  });

  $(document).keyup(function(e) {
     if ((e.keyCode == 27) && ($('.popup__wrapper--active'))) {
      hidePopup($('.popup__wrapper--active'));
    }
  });


  var popupNames = ['tarif', 'call', 'turnon'];

  popupNames.forEach(function(popupName) {
    $("[data-popup="+popupName+"]").click(function(e){
      e.preventDefault();

      if (popupName ==='tarif') {
        var tabName = $(this).data('tab');
        if (tabName) {
          $("#tab-"+tabName).prop("checked", true);
        } else {
          $("#tab-more").prop("checked", true);
        }
      }
      var top = $(window).scrollTop()+"px";
      showPopup($(".popup__wrapper--"+popupName), top);
      resizePopup(popupName);
    });
  });

  if ($('.channels__wrapper')) {
    var shadow = $('.channels__shadow');
    var wrapper = $('.channels__wrapper');
    wrapper.scroll(function(e) {
      if (wrapper.scrollTop()>10) {
        shadow.fadeOut(100);
      } else {
        shadow.fadeIn(100);
      }
    });
  }

  // popup content resize
  function resizePopup(popupName) {
    if (popupName === 'tarif') {
      var windowHeight = $(window).height();
      var popupHeight = $('.popup--'+popupName).height();
      var diff = popupHeight - windowHeight;

      if (diff>0) {

        $('.r-tab__more').height($('.r-tab__more').height()-diff);
        $('.channels__wrapper').height($('.channels__wrapper').height()-diff);
        $('.eqt').height($('.eqt').height()-diff);
      }
    }
  }
});


