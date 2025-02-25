"use strict";

$(function () {
  var $window = $(window),
    $html = $("html"),
    $container = $("#container"),
    $footer = $("#footer");

  //레이어팝업
  $("[data-pop]:not('.popup')").on("click", function () {
    var $this = $(this),
      thisId = $this.attr("data-pop"),
      $thisPop = $(`.popup[data-pop="${thisId}"]`);
    $html.addClass("popup-open");
    $thisPop.addClass("active");
    if ($thisPop.find(".dim").length < 1) {
      $thisPop.prepend('<button type="button" class="dim">닫기</button>');
    }
    if ($thisPop.hasClass("following-pop")) {
      $html.removeClass("popup-open");
      $thisPop.attr("data-pop-id", $this.attr("data-pop-id"));
      var thisOffsetTop = $this.offset().top,
        thisOffsetRight = $this.offset().left + $this.outerWidth(),
        thisOffsetBottom = $(window).innerHeight() - thisOffsetTop;
      if ($(window).innerHeight() < thisOffsetTop + $thisPop.outerHeight()) {
        $thisPop
          .find(".popup-wrap")
          .css({ left: thisOffsetRight, bottom: thisOffsetBottom });
      } else {
        $thisPop
          .find(".popup-wrap")
          .css({ left: thisOffsetRight, top: thisOffsetTop });
      }
    }
  });

  setTimeout(function () {
    $(".popup.active").prepend(
      '<button type="button" class="dim">닫기</button>'
    );
    $(document).on(
      "click",
      ".popup.active .dim,.pop-close,[data-close]",
      function () {
        var $this = $(this),
          $thisPop = $this.closest("[data-pop]"),
          thisId = $thisPop.attr("data-pop"),
          $thisBtn = $(`[data-pop="${thisId}"]:not(.popup)`);
        $thisPop.removeClass("active");
        $thisPop.find(".dim").remove();
        $thisBtn.focus();
        $html.removeClass("popup-open");
      }
    );
  }, 0);

  /* 아코디언 열고 닫기*/
  $(".qna-item .question .qna-btn").on("click", function () {
    var $this = $(this),
      $Title = $this.parent(".question"),
      $Item = $Title.parent(".qna-item"),
      $Layer = $Title.siblings(".answer"),
      IsActive = $Item.is(".active");
    if (!IsActive) {
      $this.addClass("active").attr("title", "답변 닫기");
      $Item.addClass("active");
      $Layer.slideDown();
    } else {
      $this.removeClass("actvie").attr("title", "답변 열기");
      $Item.removeClass("active");
      $Layer.slideUp();
    }
  });

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
          console.log(thisTableWidth);
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
  /*  var $select = $container.find(".select-box"),
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
  });*/

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
});
