var makeFootball = function(top, left, timeBetweenSteps){
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  return new Football(top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

var Football = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node = $('<img src="imgs/football.png" class="football">');
  this.step();
  this.setPosition(top, left);

  var context = this.$node;

  this.$node.hover(function(){

    var index = Math.floor(Math.random() * window.dancers.length);

    context.animate({
      left: window.dancers[index].$node.position().left,
      top: window.dancers[index].$node.position().top
    });
  });
};

Football.prototype = Object.create(Dancer.prototype);
Football.prototype.constructor = Football;

Football.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.apply(this, arguments);

};

