$( ".button1" ).click(function() {


    $(".petal").velocity(
      "transition.expandIn", 
                {stagger: 25, drag:true, duration:2000}
    ).delay(4000)
  
  
  });