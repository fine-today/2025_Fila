"use strict";
var $document = $(document),
  $window = $(window),
  $html = $("html");

$(function () {
  //첫 화면 animation
  setTimeout(() => {
    $html.addClass("start");
  }, 0);

  var win = {
    width: $window.outerWidth(),
    height: $window.outerHeight(),
  };
  function setHeaderMode() {
    win = {
      width: $window.outerWidth(),
      height: $window.outerHeight(),
    };
    if ($window.scrollTop() > win.height) {
      $html.attr("data-header-mode", "black");
    } else {
      $html.attr("data-header-mode", "white");
    }
  }
  setHeaderMode();
  $window.on("load", function () {
    setHeaderMode();
  });
  $window.on("scroll", function () {
    setHeaderMode();
  });
  $window.on("resize", function () {
    setHeaderMode();
  });
  $window.on("load", function () {
    var $popup = $(".visual-slide-wrap"),
      $popupSlide = $popup.find(".visual-slide .slide-list");
    setTimeout(function () {
      $popupSlide.slick({
        autoplay: true,
        dots: false,
        autoplaySpeed: 3000,
        speed: 3000,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        fade: true,
        swipe: true,
        draggable: true,
        prevArrow: $(".pop-ctrl .prev"),
        nextArrow: $(".pop-ctrl .next"),
        //추가 기능
        //autoArrow: $(".pop-ctrl .auto"),
        isRunOnLowIE: false,
        pauseOnArrowClick: true,
        pauseOnDirectionKeyPush: true,
        pauseOnSwipe: true,
        pauseOnDotsClick: true,
        pauseText: "정지",
        playText: "재생",
        //total: $(".pop-ctrl .count .total"),
        //current: $(".pop-ctrl .count .current"),
        responsive: [
          {
            breakpoint: 1001,
            settings: {
              swipe: true,
              draggable: true,
            },
          },
        ],
      });
    }, 7000);
  });
});
