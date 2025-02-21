var $logo = `
  <svg width="90" height="17" viewBox="0 0 90 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2301_103823)">
<path d="M89.9255 5.95741C89.7996 4.66006 89.6138 3.74234 88.9981 2.84919C88.3844 1.95799 87.5108 1.25951 86.4022 0.773813C85.3007 0.291993 84.3284 0.0727491 82.5749 0.0475263C81.4558 0.0313579 80.3375 0.0307111 79.2184 0.0475263C77.4649 0.0727491 76.4926 0.291993 75.3911 0.773813C74.2818 1.25951 73.4083 1.95799 72.7952 2.84919C72.1801 3.74234 71.9944 4.66071 71.8677 5.95741C71.7418 7.25283 71.7983 8.83669 71.8677 10.1638C71.9359 11.4599 72.1795 12.3795 72.7952 13.272C73.4089 14.1639 74.2825 14.8617 75.3918 15.3474C76.492 15.8292 77.9929 16.0258 79.2184 16.0737C80.3349 16.1177 81.4597 16.1177 82.5749 16.0737C83.8004 16.0258 85.3013 15.8292 86.4015 15.3474C87.5108 14.8623 88.3844 14.1639 88.9981 13.272C89.6132 12.3795 89.8574 11.4599 89.9255 10.1638C89.9957 8.83669 90.0515 7.25283 89.9255 5.95741ZM86.2801 9.34567C86.2145 12.0671 84.7188 13.1724 82.0845 13.2002C81.6883 13.2035 81.2928 13.206 80.8966 13.206C80.5005 13.206 80.1049 13.2035 79.7088 13.2002C77.0745 13.1724 75.5788 12.0671 75.5132 9.34567C75.508 8.9434 75.4827 8.49715 75.4827 8.07095C75.4827 7.64475 75.508 7.1985 75.5132 6.79623C75.5788 4.07476 77.0745 2.96949 79.7088 2.94168C80.1049 2.93844 80.5005 2.93586 80.8966 2.93586C81.2928 2.93586 81.6883 2.93844 82.0845 2.94168C84.7188 2.96949 86.2145 4.07476 86.2801 6.79623C86.2853 7.1985 86.3106 7.64475 86.3106 8.07095C86.3106 8.49715 86.2853 8.9434 86.2801 9.34567Z" fill="black"/>
<path d="M54.1597 3.13634H60.2725V15.8997H60.2945H63.9374H63.9595V3.13634H70.0729V0.242188H54.1597V3.13634Z" fill="black"/>
<path d="M44.8251 6.50318C40.9387 6.04594 39.8749 5.676 39.8749 4.45625C39.8749 3.30183 41.0478 2.93513 43.8211 2.93513C47.1801 2.93513 48.2271 3.60191 48.1887 4.6949L48.192 4.93549H51.8069V4.65222C51.8069 1.45345 49.8754 0.0920692 44.2958 0.0370965C44.177 0.035803 44.0568 0.0351562 43.9347 0.0351562C38.7162 0.0351562 36.2574 1.4942 36.2574 4.65222C36.2574 7.81024 38.2097 8.72472 43.3846 9.35594C47.4243 9.83517 48.5505 10.1779 48.5505 11.3828C48.5505 12.5877 47.3438 13.2092 44.6141 13.2092C40.7302 13.2092 39.5768 12.6718 39.5378 11.247L39.5287 10.9896H35.8742L35.8716 11.4274C35.9554 15.3318 38.6558 16.1072 44.0321 16.1072H45.2616C49.9514 16.1072 52.1927 14.4768 52.1927 11.6066V11.3207C52.1927 8.17694 50.1313 7.13504 44.8251 6.50318Z" fill="black"/>
<path d="M31.9693 0.242188H28.2822V15.8991H31.9693V0.242188Z" fill="black"/>
<path d="M17.9526 0.0351562H17.5941C15.141 0.0746072 13.822 0.806067 12.7971 1.84602C12.36 1.34157 11.1754 0.0351562 8.31643 0.0351562H7.96118C6.5843 0.0590855 4.79567 0.287384 3.61689 1.40042V0.244699H0V15.899H3.61494L3.61624 5.46193C3.62598 4.03781 4.98012 3.15437 6.91748 3.15437C6.98438 3.15437 7.05127 3.15178 7.11817 3.15437C8.66 3.21516 10.0427 3.68664 10.0635 5.63202V15.899H13.6784V5.48327C13.6888 4.04493 15.093 3.15437 17.0407 3.15437H17.2414C19.0827 3.15437 20.2718 4.04363 20.2725 5.63202V15.899H23.8874V4.70525C23.8394 1.74578 21.8345 0.0351562 17.9526 0.0351562Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2301_103823">
<rect width="90" height="16.0714" fill="white" transform="translate(0 0.0351562)"/>
</clipPath>
</defs>
</svg>
`;

$(function () {
  var $document = $(document);
  var $html = $("html");
  var $body = $("body");
  var $window = $(window);
  // MENU List
  var MENU = [
    {
      id: "0",
      title: "Misto",
      anchor: "#n",
      active: false,
      sub: [
        {
          id: "0-1",
          title: "We Are Misto",
          anchor: "#n",
          active: false,
        },
        {
          id: "0-2",
          title: "연혁",
          anchor: "#n",
          active: false,
        },
        {
          id: "0-3",
          title: "브랜드",
          anchor: "#n",
          active: true,
        },
      ],
    },
    {
      id: "1",
      title: "Investors",
      anchor: "#n",
      active: false,
      sub: [
        {
          id: "0-1",
          title: "재무정보",
          anchor: "#n",
          active: false,
        },
        {
          id: "0-2",
          title: "공시정보",
          anchor: "#n",
          active: false,
        },
        {
          id: "0-3",
          title: "주주총회",
          anchor: "#n",
          active: false,
        },
        {
          id: "0-3",
          title: "주주환원",
          anchor: "#n",
          active: false,
        },
        {
          id: "0-3",
          title: "IR자료",
          anchor: "#n",
          active: false,
        },
        {
          id: "0-3",
          title: "기업지배구조",
          anchor: "#n",
          active: false,
        },
      ],
    },
    {
      id: "2",
      title: "Sustainability   ",
      anchor: "#n",
      active: false,
      sub: [
        {
          id: "0-1",
          title: "ESG Highlights",
          anchor: "#n",
          active: false,
        },
        {
          id: "0-2",
          title: "ESG 평가정보",
          anchor: "#n",
          active: false,
        },
        {
          id: "0-3",
          title: "지속가능경영보고서",
          anchor: "#n",
          active: false,
        },
        {
          id: "0-3",
          title: "ESG 정책",
          anchor: "#n",
          active: false,
        },
      ],
    },
    { id: "logo", title: "logo", anchor: "#n", active: false },
    {
      id: "3",
      title: "Careers",
      anchor: "#n",
      active: false,
      sub: [
        {
          id: "0-1",
          title: "문화",
          anchor: "#n",
          active: false,
        },
        {
          id: "0-2",
          title: "인사제도와 복지",
          anchor: "#n",
          active: false,
        },
        {
          id: "0-3",
          title: "채용공고",
          anchor: "#n",
          active: false,
        },
      ],
    },
    {
      id: "4",
      title: "Newsroom",
      anchor: "#n",
      active: false,
      sub: [
        {
          id: "0-1",
          title: "보도자료",
          anchor: "#n",
          active: false,
        },
        {
          id: "0-2",
          title: "아카이브",
          anchor: "#n",
          active: false,
        },
        {
          id: "0-3",
          title: "CI / BI",
          anchor: "#n",
          active: false,
        },
      ],
    },
    {
      id: "5",
      title: "Contact",
      anchor: "#n",
      active: false,
      sub: [
        {
          id: "0-1",
          title: "제보채널",
          anchor: "#n",
          active: false,
        },
        {
          id: "0-2",
          title: "오시는길",
          anchor: "#n",
          active: false,
        },
      ],
    },
  ];

  //menu 생성
  var $menu = $("#menu");
  var $menuList = $menu.find(">.depth-list");
  var $footerMenuList = $("#footer-menu > .depth-list");
  MENU.forEach(function (elem, i) {
    var { id, title, anchor, sub, active } = elem;
    var $depth1 = $(`
      <li class="depth-item depth1-item ${id === "logo" ? "logo" : ""}">
        
          ${
            id === "logo"
              ? `<a href="/" class="logo-anchor">${$logo}</a>`
              : `
                <a class="depth-anchor depth1-anchor" href="${anchor}">
                  <span>${title}</span>
                </a>
              `
          }
        </a>
      </li>`);
    if (!!sub) {
      $depth1.addClass("has");
      var activeFlag = false;
      var $depth2 = $(`<div class="depth depth2"></div>`);
      var $depth2List = $(`<ul class="depth-list depth2-list"></ul>`);
      sub.forEach(function (subElem, index) {
        var { id, title, anchor, active } = subElem;
        var $depth2 = $(`
          <li class="depth-item depth2-item${active ? " actived" : ""}">
            <a class="depth-anchor depth2-anchor" href="${anchor}" ${`title="${
          active ? "현재 위치" : ""
        }"`}>
              <span>${title}</span>
            </a>
          </li>`);
        if (active) activeFlag = true;
        $depth2List.append($depth2);
      });
      if (activeFlag) $depth1.addClass("actived");
      $depth2.append($depth2List);
      $depth1.append($depth2);
    }
    var cloneDepth1 = $depth1.clone();
    $menuList.append($depth1);
    $footerMenuList.append(cloneDepth1);

    //footer menu-height
    const setFooterHeight = () => {
      var $depth1 = $footerMenuList.find(".depth1-item");
      var menuHeight = 0;
      $depth1.each(function () {
        var $this = $(this);
        var $thisAnchor = $this.find(">.depth1-anchor");
        if ($this.hasClass("has")) {
          var depth2Height = $this.find(".depth2").outerHeight();
          if (menuHeight < depth2Height) {
            menuHeight = depth2Height + 47;
          }
        }
      });
      $footerMenuList.height(menuHeight);
    };
    setFooterHeight();
  });

  // mouseover event
  $document.on("mouseover focusin", "#menu", function () {
    $html.attr("data-menu-open", "true");
    // 높이값 저장
    var depth2Height = 0;
    $(".depth2").each(function () {
      var $this = $(this);
      var thisHeight = $this.outerHeight();
      if (depth2Height < thisHeight) {
        depth2Height = thisHeight;
      }
    });
    var headerHeight = $(".header").outerHeight();
    $(".header .menu-wrap").height(headerHeight + depth2Height);
  });
  $document.on("mouseleave focusout", "#menu", function () {
    $html.attr("data-menu-open", "false");
    var headerHeight = $(".header").outerHeight();
    $(".header .menu-wrap").height(headerHeight);
  });

  $document.on("mouseover focusin", "#menu .depth-item", function () {
    if ($window.outerWidth() > 1200) {
      var $this = $(this),
        $thisAnchor = $this.find(">.depth-anchor");
      var $headerMenu = $(".header .depth1"),
        $headerMenuItem = $headerMenu.find(".depth-item");
      $headerMenu.find(".actived > .depth-anchor").removeAttr("title");
      // $headerMenuItem.removeClass("active");
      $this.addClass("active");
      $this.parents(".depth-item").addClass("active");
      $this.siblings().removeClass("active");
      $headerMenuItem.each(function (i, item) {
        var $item = $(item),
          $thisItemList = $item.find(">.depth-list");
        if ($item.hasClass("has") && $item.hasClass("active")) {
          // $thisItemList.css("display", "flex");
          $item.find(">.depth-anchor").attr("title", "열림");
        } else {
          $thisItemList.removeAttr("title");
        }
      });
    }
  });
  // 반응형 클릭 설정
  $document.on("click", "#menu .depth-anchor", function (e) {
    var $this = $(this),
      $thisItem = $this.closest(".depth-item"),
      $thisList = $this.closest(".depth-list"),
      $slblingItem = $thisList.find(">.depth-item"),
      openFlag = false;
    if ($window.outerWidth() < 1201) {
      if ($thisItem.hasClass("has")) {
        e.preventDefault();
        $thisItem.toggleClass("active");
        $thisItem.siblings().removeClass("active actived");
      }
      $slblingItem.each(function () {
        if ($(this).hasClass("active")) {
          $(this).find(">.depth").slideDown(200);
          openFlag = true;
        } else {
          $(this).find(">.depth").slideUp(200);
        }
      });
      if (openFlag) {
        $menu.removeClass("all-close");
      } else {
        $menu.addClass("all-close");
      }
    }
  });

  // 메뉴 오픈
  var $menuBtn = $(".header .menu-btn");
  $menuBtn.on("click", function () {
    var $this = $(this);
    $this.toggleClass("active");
    if ($this.hasClass("active")) {
      $html.attr("data-menu-open", "true");
      $this.attr("title", "메뉴 열림");
    } else {
      $html.attr("data-menu-open", "false");
      $this.removeAttr("title");
    }
  });

  //logo focus 문제해결
  $(".header > .logo").on("focusin", function () {
    $(".depth1 .logo > a").attr("tab-index", 0).focus();
  });
  $document.on("keydown", function (e) {
    if (e.key === "Tab") {
      var $focusElem = $(":focus");
      if ($focusElem.hasClass("logo-anchor") || $focusElem.hasClass("logo")) {
        $focusElem.attr("tabindex", -1);
        setTimeout(() => {
          $(
            ".depth1 .depth1-list:first-child .depth1-item:first-child >.depth1-anchor:first-child"
          ).focus();
        }, 0);
      }
    }
  });

  $window.on("resize", function () {});

  //footer 반응형
  const setDefault = () => {
    if ($window.outerWidth() < 1201) {
      $("#footer-menu .depth2").hide();
    } else {
      $("#footer-menu .depth2").css("display", "flex");
    }
  };
  setDefault();
  $window.on("resize", function () {
    setDefault();
  });
  $document.on("click", "#footer-menu .depth-anchor", function (e) {
    var $this = $(this),
      $thisItem = $this.closest(".depth-item"),
      $thisList = $this.closest(".depth-list"),
      $slblingItem = $thisList.find(">.depth-item"),
      openFlag = false;
    if ($window.outerWidth() < 1201) {
      if ($thisItem.hasClass("has")) {
        e.preventDefault();
        $thisItem.toggleClass("active");
        $thisItem.siblings().removeClass("active actived");
      }
      $slblingItem.each(function () {
        if ($(this).hasClass("active")) {
          $(this).find(">.depth").slideDown(200);
          openFlag = true;
        } else {
          $(this).find(">.depth").slideUp(200);
        }
      });
      if (openFlag) {
        $menu.removeClass("all-close");
      } else {
        $menu.addClass("all-close");
      }
    }
  });

  // FAQ board
  setTimeout(function () {
    $(".acc-board-item").each(function () {
      var $this = $(this).find(".acc-title-btn"),
        $thisItem = $(this),
        $thisCon = $thisItem.find(".acc-con"),
        $thisConBox = $thisCon.find(".acc-con-box"),
        thisConHeight = $thisConBox.outerHeight();
      if ($thisItem.hasClass("active")) {
        $thisCon.outerHeight(thisConHeight);
        $thisCon.attr("title", $this.text() + " 열림");
      } else {
        $thisCon.outerHeight(0);
        $thisCon.attr("title", $this.text());
      }
    });
  }, 0);
  $(".acc-title-btn").on("click", function () {
    var $this = $(this),
      $thisItem = $this.closest(".acc-board-item"),
      $thisCon = $thisItem.find(".acc-con"),
      $thisConBox = $thisCon.find(".acc-con-box"),
      thisConHeight = $thisConBox.outerHeight();
    $thisItem.toggleClass("active");
    if ($thisItem.hasClass("active")) {
      $thisCon.outerHeight(thisConHeight);
      $thisCon.attr("title", $this.text() + " 열림");
    } else {
      $thisCon.outerHeight(0);
      $thisCon.attr("title", $this.text());
    }
  });
});
