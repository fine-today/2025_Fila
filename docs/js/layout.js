var $logo = `
  <svg width="101" height="19" viewBox="0 0 101 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2780_111279)">
<path d="M100.417 7.50997C100.277 6.06847 100.07 5.04878 99.3864 4.0564C98.7044 3.06617 97.7338 2.29008 96.502 1.75042C95.2781 1.21506 94.1978 0.971457 92.2494 0.943432C91.0061 0.925467 89.7634 0.924748 88.52 0.943432C86.5716 0.971457 85.4914 1.21506 84.2675 1.75042C83.0349 2.29008 82.0643 3.06617 81.3831 4.0564C80.6997 5.04878 80.4933 6.06919 80.3526 7.50997C80.2126 8.94932 80.2754 10.7092 80.3526 12.1837C80.4284 13.6238 80.699 14.6456 81.3831 15.6373C82.065 16.6283 83.0356 17.4036 84.2682 17.9433C85.4906 18.4786 87.1583 18.6971 88.52 18.7503C89.7605 18.7991 91.0104 18.7991 92.2494 18.7503C93.6111 18.6971 95.2788 18.4786 96.5013 17.9433C97.7338 17.4043 98.7044 16.6283 99.3864 15.6373C100.07 14.6456 100.341 13.6238 100.417 12.1837C100.495 10.7092 100.557 8.94932 100.417 7.50997ZM96.3663 11.2747C96.2934 14.2986 94.6315 15.5266 91.7046 15.5575C91.2644 15.5611 90.8249 15.564 90.3847 15.564C89.9445 15.564 89.5051 15.5611 89.0649 15.5575C86.1379 15.5266 84.476 14.2986 84.4031 11.2747C84.3974 10.8277 84.3692 10.3319 84.3692 9.85835C84.3692 9.38479 84.3974 8.88896 84.4031 8.44199C84.476 5.41814 86.1379 4.19005 89.0649 4.15915C89.5051 4.15556 89.9445 4.15269 90.3847 4.15269C90.8249 4.15269 91.2644 4.15556 91.7046 4.15915C94.6315 4.19005 96.2934 5.41814 96.3663 8.44199C96.3721 8.88896 96.4002 9.38479 96.4002 9.85835C96.4002 10.3319 96.3721 10.8277 96.3663 11.2747Z" fill="#DC0014"/>
<path d="M60.6777 4.37588H67.4697V18.5574H67.4943H71.5419H71.5664V4.37588H78.3591V1.16016H60.6777V4.37588Z" fill="#DC0014"/>
<path d="M50.3053 8.11638C45.9871 7.60833 44.8051 7.19729 44.8051 5.84202C44.8051 4.55932 46.1083 4.15188 49.1897 4.15188C52.922 4.15188 54.0852 4.89275 54.0427 6.10718L54.0463 6.3745H58.0629V6.05975C58.0629 2.50557 55.9167 0.992924 49.7172 0.931843C49.5852 0.930406 49.4516 0.929688 49.316 0.929688C43.5177 0.929688 40.7856 2.55084 40.7856 6.05975C40.7856 9.56867 42.9548 10.5848 48.7048 11.2861C53.1933 11.8186 54.4446 12.1995 54.4446 13.5382C54.4446 14.8769 53.1038 15.5675 50.0708 15.5675C45.7555 15.5675 44.4738 14.9704 44.4305 13.3873L44.4204 13.1013H40.3598L40.3569 13.5878C40.45 17.926 43.4506 18.7876 49.4242 18.7876H50.7903C56.0012 18.7876 58.4915 16.976 58.4915 13.7868V13.4692C58.4915 9.97611 56.2011 8.81845 50.3053 8.11638Z" fill="#DC0014"/>
<path d="M36.0215 1.16016H31.9248V18.5567H36.0215V1.16016Z" fill="#DC0014"/>
<path d="M20.4473 0.929688H20.049C17.3234 0.973522 15.8577 1.78626 14.719 2.94176C14.2334 2.38125 12.9171 0.929688 9.74048 0.929688H9.34575C7.81589 0.956276 5.82852 1.20994 4.51876 2.44665V1.16251H0.5V18.5562H4.5166L4.51804 6.95944C4.52886 5.37709 6.03347 4.39548 8.18609 4.39548C8.26042 4.39548 8.33475 4.39261 8.40907 4.39548C10.1222 4.46303 11.6586 4.98689 11.6817 7.14843V18.5562H15.6983V6.98315C15.7098 5.38499 17.27 4.39548 19.4341 4.39548H19.6571C21.703 4.39548 23.0243 5.38355 23.025 7.14843V18.5562H27.0416V6.11868C26.9882 2.83038 24.7605 0.929688 20.4473 0.929688Z" fill="#DC0014"/>
</g>
<defs>
<clipPath id="clip0_2780_111279">
<rect width="100" height="17.8571" fill="white" transform="translate(0.5 0.929688)"/>
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
      title: "Group",
      anchor: "#n",
      active: false,
      sub: [
        {
          id: "0-1",
          title: "We are Misto",
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
          active: false,
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
      title: "Sustainability",
      anchor: "#n",
      active: false,
      sub: [
        {
          id: "0-1",
          title: "ESG 하이라이트",
          anchor: "#n",
          active: false,
        },
        {
          id: "0-2",
          title: "ESG 평가 & 이미셔티브",
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
          title: "복지",
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
          title: "Corporate Identity",
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
          title: "제보체널",
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
  var ENG_MENU = [
    {
      id: "0",
      title: "Group",
      anchor: "#n",
      active: false,
      sub: [
        {
          id: "0-1",
          title: "We are Misto",
          anchor: "#n",
          active: false,
        },
        {
          id: "0-2",
          title: "History",
          anchor: "#n",
          active: false,
        },
        {
          id: "0-3",
          title: "Brands",
          anchor: "#n",
          active: false,
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
          title: "Financial Information",
          anchor: "#n",
          active: false,
        },
        {
          id: "0-2",
          title: "Public Disclosures",
          anchor: "#n",
          active: false,
        },
        {
          id: "0-3",
          title: "Shareholders' Meeting",
          anchor: "#n",
          active: false,
        },
        {
          id: "0-3",
          title: "Shareholder Return",
          anchor: "#n",
          active: false,
        },
        {
          id: "0-3",
          title: "IR Board",
          anchor: "#n",
          active: false,
        },
        {
          id: "0-3",
          title: "Corporate Governance",
          anchor: "#n",
          active: false,
        },
      ],
    },
    {
      id: "2",
      title: "Sustainability",
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
          title: "ESG Ratings & Initiatives",
          anchor: "#n",
          active: false,
        },
        {
          id: "0-3",
          title: "Sustainability Report",
          anchor: "#n",
          active: false,
        },
        {
          id: "0-3",
          title: "ESG Policy",
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
          title: "Culture",
          anchor: "#n",
          active: false,
        },
        {
          id: "0-2",
          title: "Benefits",
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
          title: "Press Release",
          anchor: "#n",
          active: false,
        },
        {
          id: "0-2",
          title: "Archive",
          anchor: "#n",
          active: false,
        },
        {
          id: "0-3",
          title: "Corporate Identity",
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
          title: "Hotline",
          anchor: "#n",
          active: false,
        },
        {
          id: "0-2",
          title: "IR Contact",
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
  const setMENU = (menu) => {
    menu.forEach(function (elem, i) {
      var { id, title, anchor, sub, active } = elem;
      var $depth1 = $(`
      <li class="depth-item depth1-item ${id === "logo" ? "misto-logo" : ""}">
        
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
  };
  if (window.location.href.includes("service")) {
    setMENU(MENU);
  } else if (window.location.href.includes("eng")) {
    setMENU(ENG_MENU);
    $html.addClass("eng");
  }

  // mouseover event
  $document.on("mouseover focusin", "#menu", function () {
    if ($window.outerWidth() > 1200) {
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
      $(".header .menu-wrap").height(headerHeight + depth2Height + 20);
    }
  });

  $document.on("mouseover focusin", "#menu .depth-item", function () {
    if ($window.outerWidth() > 1200) {
      var $this = $(this),
        $thisAnchor = $this.find(">.depth-anchor");
      var $headerMenu = $(".header .depth1"),
        $headerMenuItem = $headerMenu.find(".depth-item");
      $(".depth2").removeAttr("style");
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

  $document.on("mouseleave focusout", "#menu", function () {
    if ($window.outerWidth() > 1200) {
      $html.attr("data-menu-open", "false");
      var headerHeight = $(".header").outerHeight();
      $(".header .menu-wrap").height(headerHeight);
    }
  });

  // scroll event
  $window.on("mousewheel DOMMouseScroll", function (e) {
    var delta = e.originalEvent.deltaY;
    if ($window.scrollTop() > 10) {
      $(".header").addClass("scroll");
    } else {
      $(".header").removeClass("scroll");
    }
    if (delta < 0) {
      $(".header").attr("data-scroll-direction", "top");
    } else {
      $(".header").attr("data-scroll-direction", "bottom");
    }
  });

  // 반응형 클릭 설정
  $document.on("click", "#menu .depth-anchor", function (e) {
    var $this = $(this),
      $thisItem = $this.closest(".depth-item"),
      $thisDepth1Item = $this.closest(".depth1-item"),
      $thisList = $this.closest(".depth-list"),
      $slblingItem = $thisList.find(">.depth-item"),
      openFlag = false;
    if ($window.outerWidth() < 1201) {
      if ($thisItem.hasClass("has")) {
        e.preventDefault();
        $("#menu .depth-item").removeClass("active actived");
        $thisItem.toggleClass("active");
        $thisDepth1Item.addClass("active");
        $thisDepth1Item.siblings().removeClass("active actived");
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
        console.log(1);
        $menu.addClass("all-close");
      }
    }
  });

  // 메뉴 오픈(반응형 시)
  var $menuBtn = $(".header .menu-btn");
  $menuBtn.on("click", function () {
    var $this = $(this);
    var $closeIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2377_130779)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.1169 11.6727L3.82324 17.9664L5.23745 19.3806L11.5311 13.0869L17.9653 19.5212L19.3796 18.107L12.9453 11.6727L19.3796 5.23843L17.9653 3.82422L11.5311 10.2585L5.23745 3.96484L3.82324 5.37906L10.1169 11.6727Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2377_130779">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>`;
    var $openIcon = `<svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2006_83360)">
        <rect width="20" height="2" transform="translate(2 6)" fill="black" />
        <rect width="20" height="2" transform="translate(2 16)" fill="black" />
      </g>
      <defs>
        <clipPath id="clip0_2006_83360">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>`;
    $this.toggleClass("active");
    if ($this.hasClass("active")) {
      $html.attr("data-menu-open", "true");
      $this.attr("title", "메뉴 열림");
      $this.find("i").html($closeIcon);
      $menu.addClass("delay");
      console.log($window.height());
      $(".menu-wrap").outerHeight($window.height());
      setTimeout(() => {
        $menu.removeClass("delay");
      }, 300);
    } else {
      $html.attr("data-menu-open", "false");
      $this.removeAttr("title");
      $this.find("i").html($openIcon);
    }
    var openFlag = false;
    $("#menu .depth-item").each(function () {
      if ($(this).hasClass("active")) {
        openFlag = true;
      }
      if (openFlag) {
        $menu.removeClass("all-close");
      } else {
        $menu.addClass("all-close");
      }
    });
  });

  //logo focus 문제해결
  $(".header  h1.misto-logo").on("focusin", function () {
    $(".depth1 .misto-logo > a").attr("tab-index", 0).focus();
  });
  $document.on("keydown", function (e) {
    if (e.key === "Tab") {
      var $focusElem = $(":focus");
      if (
        $focusElem.hasClass("logo-anchor") ||
        $focusElem.hasClass("misto-logo")
      ) {
        $focusElem.attr("tabindex", -1);
        setTimeout(() => {
          $(
            ".depth1 .depth1-list:first-child .depth1-item:first-child >.depth1-anchor:first-child"
          ).focus();
        }, 0);
      }
    }
  });
  var $footerMenu = $("#footer-menu");

  $window.on("resize", function () {
    $menuBtn.removeClass("active").removeAttr("title");
    $html.removeAttr("data-menu-open");
    $menu.find(".depth-item").removeClass("active");
    $menu.find(".depth2").css("display", "none");
  });

  //footer 반응형
  const setDefault = () => {
    if ($window.outerWidth() < 1201) {
      $footerMenu.find(".depth2").hide();
      var openFlag = false;
      $footerMenu.find(".depth1-item").each(function () {
        if ($(this).hasClass("active")) {
          openFlag = true;
        }
      });
      if (openFlag) {
        $footerMenu.removeClass("all-close");
      } else {
        $footerMenu.addClass("all-close");
      }
    } else {
      $footerMenu.find(".depth2").css("display", "flex");
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
        $footerMenu.removeClass("all-close");
      } else {
        $footerMenu.addClass("all-close");
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
});
