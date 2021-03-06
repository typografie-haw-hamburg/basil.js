﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );

  var red = b.color(255, 0, 0);
  var green = b.color(0, 255, 0);
  var blue = b.color(0, 0, 255);
  var yellow = b.color(255, 255, 0);
  var cyan = b.color(0, 255, 255);

  var colors = [red, green, blue, yellow, cyan];

  var random1 = b.floor(b.random(0, colors.length));
  var random2 = b.floor(b.random(0, colors.length));

  var color1 = colors[random1];
  var color2 = colors[random2];

  for(var i = 0; i < 200; i++) {
    var x = b.random(0, b.width);
    var y = b.random(0, b.height);

    if(x > b.width / 2   &&   y < b.height / 2) {
      b.fill(color1);
    } else if(x < b.width / 2   &&   y > b.height / 2) {
      b.fill(color2);
    }

    b.ellipse(x, y, 20, 20);

    b.fill(0);
  }


}

b.go();
