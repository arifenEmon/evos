(function ($) {
  "use strict";
  // slick slider
  $('.sponsor-brand').slick({
      slidesToShow: 5,
      arrows: false,
    });
  // offcanvas
  $(".humberg-icon").on('click', function(){
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-menu-overlay").addClass("active");
  });

  $(".manu-x, .offcanvas-menu-overlay").on('click', function(){
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-menu-overlay").removeClass("active");
  });  
  // type js
  var typed = new Typed(".type", {
    strings: [
      "Designer.",
      "Founder."
    ],
    typeSpeed: 70,
    backSpeed: 70,
    loop: true,
    cursorChar: '',
  });
  // parallax JS
  var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene);

  var scene = document.getElementById('scene2');
  var parallaxInstance = new Parallax(scene2);

  // hover-3D
  $(".about").hover3d({
    selector: ".leyar",
    shine: false,
    sensitivity: 20,
  });

  $(".qualification").hover3d({
    selector: ".leyar",
    shine: true,
    sensitivity: 30,
  });

  // init Isotope
  var $grid = $('.portfolio-grid').isotope({
    
    // init Isotop
    itemSelector: '.portfolio-item ',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 1
    }
  });
  // filter items on button click
  $('.portfolio-manu').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  // Fancy-box
  $('[data-fancybox="gallery"]').fancybox({
    animationEffect: "zoom-in-out",
    transitionEffect: "slide",
   
  });





  $('#single-prohress-ber').circleProgress({
    value: 0.75,
    size: 80,
    fill: {
      gradient: ["red", "orange"]
    }
  });






})(jQuery);


