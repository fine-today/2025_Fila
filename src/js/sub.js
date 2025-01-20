"use strict";

$(function () {
  var $windows = $(window),
    $html = $("html"),
    $container = $("#container"),
    $footer = $("#footer");

  //테이블 thead tr 두 개 이상 스타일
  $(".table thead tr").each(function () {
    var trIndex = $(this).index() + 1;

    if (trIndex > 1) {
      $(this).closest(".table").addClass("tr-over");
    }
  });

  //레이어팝업
  $("[data-pop]").click(function () {
    var $this = $(this),
      thisId = $this.attr("data-pop"),
      $thisPop = $(`.popup[data-pop="${thisId}"]`);
    $html.addClass("popup-open");
    $thisPop.addClass("active");
    if ($thisPop.find(".dim").length < 1) {
      $thisPop.prepend('<button type="button" class="dim">닫기</button>');
    }
  });

  setTimeout(function () {
    $(".popup.active").prepend(
      '<button type="button" class="dim">닫기</button>'
    );
    $(document).on(
      "click",
      ".popup.active .dim,.popup-close,[data-close]",
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

  /* 서브탭메뉴 */
  $(".tab-button").click(function () {
    var $this = $(this),
      index = $this.closest(".tab-item").index(),
      tabBtnText = $this.text(),
      $tabPanel = $this.closest(".tab-panel"),
      $tabMenu = $this.closest(".tab-menu"),
      $tabContent = $tabMenu.find(">.tab-content");
    $this
      .attr("title", "선택됨")
      .closest(".tab-item")
      .addClass("active")
      .siblings(".tab-item")
      .removeClass("active")
      .find(".tab-button")
      .removeAttr("title");
    $this.closest(".tab").find(">.tab-menu .tab-select span").text(tabBtnText);
    $tabContent
      .eq(index)
      .addClass("active")
      .siblings(".tab-content")
      .removeClass("active");
  });

  //테이블.responsive 반응형
  $("table.table.responsive").each(function () {
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
  });

  /* 탬플릿 전체보기 */
  var $tab = $container.find(".tab.template"),
    $tabAll = $tab.find(".tab-all"),
    $tabContent = $tab.find(".tab-content");

  $tabContent.addClass("active");
  $tabAll.click(function (event) {
    var $this = $(this);

    $this
      .closest(".tab-item")
      .addClass("active")
      .siblings()
      .removeClass("active");
    $tabContent.addClass("active");
  });

  //ol.num
  $("ol.num").each(function () {
    var $this = $(this),
      $ThisLi = $this.find(">li");
    $ThisLi.each(function () {
      var $this = $(this),
        ThisIndex = $this.index() + 1;
      $this.prepend('<i class="count">' + ThisIndex + "</i>");
    });
  });

  //img mobile - 모바일에서 확대 아이콘 추가
  var $imgMobile = $(".img-mobile");
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
  });

  //셀렉트박스 디자인
  var $select = $container.find(".style-select-box"),
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
    $this
      .closest(".style-select-box")
      .find(".search-select")
      .text(selectButtonText);
    $selectList.addClass("active").siblings().removeClass("active");
  });

  $selectAllButton.click(function () {
    var $this = $(this),
      $parentmenu = $this.parents(".style-select-box"),
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
  $(".password .show-hide").on("click", function () {
    var $this = $(this),
      $thisInput = $this.siblings("input"),
      $thisParent = $this.closest(".password");
    $thisParent.toggleClass("show");
    if ($thisParent.hasClass("show")) {
      $thisInput.attr("type", "text");
    } else {
      $thisInput.attr("type", "password");
    }
  });
});
