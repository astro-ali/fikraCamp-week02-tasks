$(function () {
    $(document).scroll(function () {
      var $nav = $("nav");
      $nav.toggleClass('fixed-top', $(document).scrollTop() > 70);
    });
  });
