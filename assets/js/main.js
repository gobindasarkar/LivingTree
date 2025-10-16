(function ($) {
  "use strict";
  /*-------------------------------------------
  preloader active
  --------------------------------------------- */
  jQuery(window).on("load", function () {
    jQuery(".preloader").fadeOut("slow");
  });

  $(window).on("scroll", function () {
    const scrolled = $(this).scrollTop() >= 300;
    $(".header-aera").toggleClass("stick", scrolled);
  });

  jQuery(document).ready(function () {
    /*-------------------------------------------
    js scrollup
    --------------------------------------------- */
    $.scrollUp({
      scrollText: '<i class="fa fa-angle-up"></i>',
      easingType: "linear",
      scrollSpeed: 900,
      animation: "fade",
    });
    /*-------------------------------------------
      VenoBox active
    --------------------------------------------- */
    new VenoBox({
      selector: '.my-video-links',
    });
    


  });
})(jQuery);
