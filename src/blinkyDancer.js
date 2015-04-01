var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  return new BlinkyDancer(top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node = $('<img src="imgs/aaron-copy.png" class="aaron">');
  this.step();
  this.setPosition(top, left);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.apply(this, arguments);

  // this.$node.toggle();
};
