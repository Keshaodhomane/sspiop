$(document).ready(function() {
    //Horizontal Tab
    $('#parentHorizontalTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        tabidentify: 'hor_1', // The tab groups identifier
        activate: function(event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#nested-tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });





    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        asNavFor: '.slider-nav'
      });

      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        centerMode: true,
        focusOnSelect: true,

        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]

      });






      


  function switchStyleSheets(theme){
    $('link[title="theme"]').attr('href', theme);
    }
  
  $(document).ready(function(){
      
      
      $('#black').click(function(event){
          event.preventDefault();
          switchStyleSheets(
              'css/black.css'
          );
      });
      
              
      $('#default').click(function(event){
          event.preventDefault();
          switchStyleSheets(
              'css/default.css'        
          );
      });
      
      
      
      $('#orange').click(function(event){
          event.preventDefault();
          switchStyleSheets(
              'css/orange.css'        
          );
      });
      
      
      
      
      $('#green').click(function(event){
          event.preventDefault();
          switchStyleSheets(
              'css/green.css'
          );
      });
      
  });
      
                    
      
      
      
      /* this changes font size of */
  
      var originalSize = $('div').css('font-size');
      // reset
      $(".resetMe").click(function(){
      $('div').css('font-size', originalSize); 
  
      });
  
      // Increase Font Size
      $(".increase").click(function(){
      var currentSize = $('div').css('font-size');
      var currentSize = parseFloat(currentSize)*1.2;
      $('div').css('font-size', currentSize);
  
      return false;
      });
  
      // Decrease Font Size
      $(".decrease").click(function(){
      var currentFontSize = $('div').css('font-size');
      var currentSize = $('div').css('font-size');
      var currentSize = parseFloat(currentSize)*0.8;
      $('div').css('font-size', currentSize);
  
      return false;
      });









   
});