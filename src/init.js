$(document).ready(function(){
  window.dancers = [];
  window.footballs = [];

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
    footballs.push(dancer);

  });

  $(".passFootball").on("click", function(event){

    var index = Math.floor(Math.random() * window.dancers.length);
    $('.football').animate({
      left: window.dancers[index].$node.position().left,
      top: window.dancers[index].$node.position().top
    });
  });

  $(".tackle").on("click", function(event){

    var football = $('.football');
    console.log(football);
    var left = football.position().left;
    var top = football.position().top;
    var playerDistances = [];

    for(var i = 0; i < dancers.length; i++){
      var playerLeft = dancers[i].left;
      var playerTop =  dancers[i].top;

      var distance = Math.sqrt(Math.pow(Math.abs(left - playerLeft),2) +
        Math.pow(Math.abs(top - playerTop), 2));

      playerDistances.push([distance, i]);
    };

    playerDistances.sort(function(a,b){return a[0] - b[0]});

    for (var i = 0; i < 6; i++) {
      var player = dancers[playerDistances[i][1]];

      player.$node.addClass('tackler');
    }

    $('.tackler').animate({
      left: left,
      top: top
    });

    $('img').removeClass('tackler');
  });



});


