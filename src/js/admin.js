$(function () {
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
});
