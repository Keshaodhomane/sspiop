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




    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
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




      
      var img = $(".imgsbanner div");
      var h2 = $(".imgsbanner div h2");
      var h3 = $(".imgsbanner div h3");
      var t = new TimelineMax({paused:true});

      t.set(img,{display:"none"})
      t.set(h2,{display:"none"})
      t.set(h3,{display:"none"})

      $(img).each(function(index, element)
      {
        t.from(img[index], 1, {display:"block", autoAlpha:0, scale:5, ease:Sine.easeOut})
        t.from(h2[index], .5, {display:"block", autoAlpha:0, left:"-300px", ease:Sine.easeOut})
        t.from(h3[index], .5, {display:"block", autoAlpha:0, left:"-300px", ease:Sine.easeOut})
        t.to(img[index],1,{autoAlpha:0},"+=2");
       
      })
      
      t.play();
      t.repeat(-1);

      $("div.upload-progress-bar").each(function (index,value) {alert(this.id); });
   
});