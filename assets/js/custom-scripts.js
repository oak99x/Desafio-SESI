(function($) {
  "use strict";
  
    $.fn.andSelf = function() {
      return this.addBack.apply(this, arguments);
    }

    /* Loader Code Start */
    $(window).on("load", function() { 
      $(".section-loader").fadeOut("slow");
      
      var $container = $('.portfolioContainer');
      $container.isotope({
          filter: '*',
          animationOptions: {
              queue: true
          }
      });
   
      $('.portfolio-nav li').click(function(){
          $('.portfolio-nav .current').removeClass('current');
          $(this).addClass('current');
   
          var selector = $(this).attr('data-filter');
          $container.isotope({
              filter: selector,
              animationOptions: {
                  queue: true
              }
           });
           return false;
      });
    });
        
      $('#mh-header').onePageNav({
          currentClass: 'active', 
          changeHash: false,
          scrollSpeed: 750,
          scrollThreshold: 0.5,
      });
    
}(jQuery));
