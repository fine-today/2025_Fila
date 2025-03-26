"use strict";

$(function () {
  var $window = $(window),
    $html = $("html"),
    $container = $("#container"),
    $footer = $("#footer");

  /* 탭 */
  $(".tab-btn").click(function () {
    var $this = $(this),
      index = $this.attr("data-index"),
      $tab = $this.closest(".tab"),
      $tabCon = $tab.find(".tab-con"),
      $tabConActive = $tab.find(`.tab-con[data-index="${index}"]`);

    $this.siblings().removeClass("active").removeAttr("title");
    $this.attr("title", "선택됨").addClass("active");
    if ($this.hasClass("all")) {
      $tabCon.addClass("active").attr("title", "선택됨");
    } else {
      $tabCon.removeClass("active").removeAttr("title");
      $tabConActive.addClass("active").attr("title", "선택됨");
    }
  });

  /* table */
  var setResponsiveTable = function () {
    var $tableWrap = $(".table-wrap");
    $tableWrap.each(function () {
      var $this = $(this),
        $thisTable = $this.find(".table"),
        thisBreakPoint = $this.attr("data-break"),
        thisTableWidth = $this.attr("data-width");
      if (thisBreakPoint === "xs") {
        if ($window.outerWidth() <= 800) {
          $thisTable.css("minWidth", thisTableWidth + "px");
        } else {
          $thisTable.removeAttr("style");
        }
      } else if (thisBreakPoint === "sm") {
        if ($window.outerWidth <= 1000) {
          $thisTable.css("minWidth", thisTableWidth);
        } else {
          $thisTable.removeAttr("style");
        }
      }
    });
  };
  setResponsiveTable();
  $window.on("resize", function () {
    setResponsiveTable();
  });

  //box
  const setCardWrap = () => {
    $(".card-wrap").each(function () {
      var $this = $(this),
        thisTitleWidth = $this.attr("data-title-width"),
        thisMobileWidth = $this.attr("data-mobile-width"),
        $thisList = $this.find(".card-list"),
        $thisItem = $this.find(".card-item");
      if (thisMobileWidth === undefined) {
        thisMobileWidth = thisTitleWidth;
      }
      if ($window.outerWidth() > 800) {
        $thisItem.find(".title").css("width", thisTitleWidth + "px");
        $thisItem.find(".con").css("width", `calc(100% - ${thisTitleWidth}px`);
      } else {
        $thisItem.find(".title").css("width", thisMobileWidth + "px");
        $thisItem.find(".con").css("width", `calc(100% - ${thisMobileWidth}px`);
      }
    });
  };
  setCardWrap();
  $window.on("resize", function () {
    setCardWrap();
  });

  /* accordion */
  var $accordionBox = $(".accordion-box"),
    $accordion = $accordionBox.find(".accordion"),
    $accordionBtn = $accordionBox.find(".accordion-btn");
  $(window).on("load", function () {
    $accordion.each(function () {
      var $this = $(this),
        $thisBtn = $this.find(".accordion-btn"),
        $thisCon = $this.find(".accordion-con");

      if ($this.hasClass("active")) {
        $this.attr("title", "열림");
        $thisBtn.attr("title", "열림");
        $thisCon.slideDown(100);
      } else {
        $this.removeAttr("title");
        $thisBtn.removeAttr("title");
        $thisCon.slideUp(100);
      }
    });
  });

  $accordionBtn.on("click", function () {
    var $this = $(this),
      $thisAccordion = $this.closest(".accordion"),
      $thisCon = $thisAccordion.find(".accordion-con");
    $thisAccordion.toggleClass("active");
    if ($thisAccordion.hasClass("active")) {
      $thisAccordion.attr("title", "열림");
      $this.attr("title", "열림");
      $thisCon.slideDown(100);
    } else {
      $thisAccordion.removeAttr("title");
      $this.removeAttr("title");
      $thisCon.slideUp(100);
    }
  });

  //테이블.responsive 반응형
  /*$("table.table.responsive").each(function () {
    var RowSpanExist = $(this).find("td, th").is("[rowspan]"),
      TheadExist = $(this).find("thead").length;
    if (RowSpanExist == false && TheadExist != 0) {
      //rowspan이 없을 경우만 실행 (rowspan이 있으면 지원불가)
      $(this)
        .children("tbody")
        .children("tr")
        .find("th, td")
        .each(function () {
          var ThisIndex = $(this).index(),
            TheadText = $(this)
              .parents("tbody")
              .siblings("thead")
              .find("th")
              .eq(ThisIndex)
              .text();
          $(this).attr("data-content", TheadText);
        });
      $(this)
        .children("tfoot")
        .children("tr")
        .find("th, td")
        .each(function () {
          var ThisIndex = $(this).index(),
            TheadText = $(this)
              .parents("tfoot")
              .siblings("thead")
              .find("th")
              .eq(ThisIndex)
              .text();
          $(this).attr("data-content", TheadText);
        });
    }
  });*/

  //ol.num
  /*$("ol.num").each(function () {
    var $this = $(this),
      $ThisLi = $this.find(">li");
    $ThisLi.each(function () {
      var $this = $(this),
        ThisIndex = $this.index() + 1;
      $this.prepend('<i class="count">' + ThisIndex + "</i>");
    });
  });*/

  //img mobile - 모바일에서 확대 아이콘 추가
  /*var $imgMobile = $(".img-mobile");
  $(window).on("load resize", function () {
    $imgMobile.each(function () {
      var $this = $(this),
        $img = $this.find("img"),
        imgRight = $img.outerWidth() + $img.offset().left;
      $this.find(".zoom").remove();
      if ($(window).width() < 1000) {
        var $elem = $(
          '<a href="' +
            $img.attr("src") +
            '" class="zoom" target="-blank" title="이미지확대보기 새창"></a>'
        );
        $this.append($img).append($elem);
        var $zoom = $this.find(".zoom");
        $zoom.css("left", imgRight - $this.offset().left - $zoom.width());
      }
    });
  });*/

  //셀렉트박스 디자인
  var $select = $container.find(".select-box"),
    $selectAllButton = $select.find("button", "a"),
    $selectAnchor = $select.find(".select-anchor"),
    $selectList = $select.find(".search-list");

  $selectAnchor.click(function () {
    var $this = $(this),
      selectButtonText = $this.text();

    $this
      .attr("title", "선택됨")
      .closest(".select-item")
      .addClass("active")
      .siblings(".select-item")
      .removeClass("active")
      .find(".select-anchor")
      .removeAttr("title");
    $this.closest(".select-box").find(".search-select").text(selectButtonText);
    $selectList.addClass("active").siblings().removeClass("active");
  });

  $selectAllButton.click(function () {
    var $this = $(this),
      $parentmenu = $this.parents(".select-box"),
      IsActive = $parentmenu.is(".active");
    if (!IsActive) {
      $this.attr("title", "열림");
      $parentmenu.find(".search-list").stop().slideDown("250", "easeOutExpo");
      $parentmenu.addClass("active");
    } else {
      $this.removeAttr("title");
      $parentmenu.find(".search-list").stop().slideUp("250", "easeOutExpo");
      $parentmenu.removeClass("active");
    }
  });

  // password input
  /*$(".password .show-hide").on("click", function () {
    var $this = $(this),
      $thisInput = $this.siblings("input"),
      $thisParent = $this.closest(".password");
    $thisParent.toggleClass("show");
    if ($thisParent.hasClass("show")) {
      $thisInput.attr("type", "text");
    } else {
      $thisInput.attr("type", "password");
    }
  });*/

  //datepicker
  $(".input.date>input").datepicker({
    dateFormat: "yy-mm-dd",
    showOn: "both",
    buttonImageOnly: false,
    buttonText: "선택",
    showMonthAfterYear: true,
    monthNamesShort: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
    ],
    monthNames: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    yearSuffix: "년",
    dayNamesMin: ["일", "월", "화", "수", "목", "금", "토", "일"],
    dayNames: ["일", "월", "화", "수", "목", "금", "토", "일"],
  });

  //content-header
  $(".content-header .banner").outerWidth($(window).width());
  $window.on("resize", function () {
    $(".content-header .banner").outerWidth($(window).width());
  });

  //input(clear btn 추가)
  $('.input input[type="text"]').on("focus", function () {
    var $this = $(this),
      $thisParent = $this.closest(".input");
    var $clearIcon = $(
      '<button type="button" class="clear">내용 지움</button>'
    );
    if ($thisParent.find(".clear").length <= 0) {
      $thisParent.append($clearIcon);
    }
  });
});
