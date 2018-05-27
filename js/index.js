 $(document).ready(function () {
        $('.materialboxed').materialbox();
        $('.scrollspy').scrollSpy();
         $('.modal-trigger').leanModal();

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });

 $('.modal').modal();
  // DROPDOWNS
  $(".dropdown-button").dropdown(
    {
      belowOrigin: true,
      constrainWidth: false
    }
  );
  // TABS
  $('ul.tabs').tabs();
  // SCROLLSPY
  $('.scrollspy').scrollSpy();
  //SIDENAV
  $(".button-collapse").sideNav();
          $(".dropdown-trigger").dropdown();
    $('.slider').slider();

    });