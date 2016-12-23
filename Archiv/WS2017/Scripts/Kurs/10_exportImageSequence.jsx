﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.noFill();

  for(var i = 0; i < 20; i++) {
    var x = b.random(b.width);
    var y = b.random(b.height);

    b.ellipse(x, y, 50, 50);

    b.savePNG("Kreise" + i + ".png");
  }

}

b.go();
