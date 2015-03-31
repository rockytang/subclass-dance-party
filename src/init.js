$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    for (var i = 0; i < 6; i++) {

      var dancer = dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );
      $('body').append(dancer.$node);
      dancers.push(dancer)
    };

  });

  $(".addMarshawn").on("click", function(event){

    var marshawnMakerFunctionName = $(this).data("dancer-maker-function-name");
    var marshawnMakerFunction = window[marshawnMakerFunctionName];

    for (var i = 0; i < 6; i++) {
      var dancer = marshawnMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );
      $('body').append(dancer.$node);
      dancers.push(dancer);
    }
  });

  $(".addFootball").on("click", function(event){

    var footballMakerFunctionName = $(this).data("dancer-maker-function-name");
    var footballMakerFunction = window[footballMakerFunctionName];
    var dancer = footballMakerFunction(
      window.dancers[0].top,
      window.dancers[0].left
    );
    $('body').append(dancer.$node);
    dancers.push(dancer);

  });

  $(".passFootball").on("click", function(event){

    var index = Math.floor(Math.random() * window.dancers.length);
    $('.football').animate({
      left: window.dancers[index].$node.position().left,
      top: window.dancers[index].$node.position().top
    })
  });
});


