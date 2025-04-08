"use strict";
var $document = $(document),
  $window = $(window),
  $html = $("html");

$(function () {
  //첫 화면 animation
  setTimeout(() => {
    $html.addClass("start");
  }, 0);

  $(".main .sec1, .main .sec2").outerWidth($(window).width());
  $(window).on("resize", function () {
    $(".main .sec1, .main .sec2").outerWidth($(window).width());
  });

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
    var $visualSlideWrap = $(".visual-slide-wrap"),
      $visualSlide = $visualSlideWrap.find(".visual-slide .slide-list");
    setTimeout(function () {
      $visualSlide.slick({
        autoplay: true,
        dots: false,
        autoplaySpeed: 4000,
        speed: 1000,
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

  //sec2
  var $brandWrap = $(".brand-slide-wrap"),
    $brandSlide = $brandWrap.find(".brand-slide .slide-list");
  $brandSlide.slick({
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 300,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    swipe: true,
    draggable: true,
    prevArrow: $(".arrow-wrap .prev"),
    nextArrow: $(".arrow-wrap .next"),
    //추가 기능
    //autoArrow: $(".pop-ctrl .auto"),
    isRunOnLowIE: false,
    pauseOnArrowClick: true,
    pauseOnDirectionKeyPush: true,
    pauseOnSwipe: true,
    pauseOnDotsClick: true,
    pauseText: "정지",
    playText: "재생",
    //total: $(".brand-ctrl .count .total"),
    //current: $(".brand-ctrl .count .current"),
    dots: true,
    appendDots: $(".brand-slide-wrap .count"),
    customPaging: function (slider, i) {
      var thumb = $(slider.$slides[i]).attr("data-thum");
      return '<button type="button"><span>' + (i + 1) + "번째</span></button>";
    },
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
});
