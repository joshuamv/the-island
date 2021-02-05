/////// p5 sketch ///////

var s = function( p ) { // p could be any variable name
  var circleSize = 0;
  p.setup = function() {
    p.createCanvas(330, 350);
  };

  p.draw = function() {
    p.background(0, 5);
    //circular lines
    p.fill(0, 4);
    p.strokeWeight(2);
    p.stroke(255);
    p.translate(340/2, 350/2);
    p.ellipse(0, 0, 265);
    p.ellipse(0, 0, 205);
    p.ellipse(0, 0, 145);
    p.ellipse(0, 0, 85);
    p.ellipse(0, 0, 25);
    //moving filling
    p.push();
    p.rotate((-1 * p.PI) + (1 * p.PI) * (p.frameCount % 1000) / 250);
    p.strokeWeight(2);
    p.stroke(255, 190);
    p.line(0, 0, 265/2, 0);
    p.pop();
    //circle pulse
    p.fill(0, 0);
    p.strokeWeight(5);
    p.stroke(255, 15);
    circleSize += 2.3;
    if (circleSize > 265){
       circleSize = 0
    }
    p.ellipse(0, 0, circleSize);
  };
};
var myp5 = new p5(s, 'p5-radar');
