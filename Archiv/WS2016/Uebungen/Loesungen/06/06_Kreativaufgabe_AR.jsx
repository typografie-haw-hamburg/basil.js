﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

  // Script, das über mehrere Seiten läuft

  b.clear(b.doc());



  var pageCount = 5;
  var circleCount = 20;

  for (var j = 0; j < pageCount; j++) {

    // in der ersten Runde müssen wir keine neue Seite hinzufügen, denn die erste Seite ist schon vorhanden
    if(j > 0) {
      b.addPage();
    }


    for(var i = 0; i < circleCount; i++) {

      var x = b.random(255, b.width);
      var y = b.random(37, b.height);
      var size = b.random(60, 50);

      b.ellipse(x, y, size, size);
      b.fill(4,20,178);
    
  }
for(var i = 0; i < circleCount; i++) {

      var x = b.random(0, b.width);
      var y = b.random(0, b.height);
      var size = b.random(80, 50);

      b.ellipse(x, y, size, size);
      b.fill(255,90,170);
}

  var circleCount = 50;
  var xPos = 25;
  var diameter = 20;


  for(var i = 0; i < circleCount; i++) {

    var x = b.random(0, b.width);
    var y = b.random(0, b.height);

    var yellow = b.map(y , 0, b.height, 0, 255);
    b.fill(yellow, 242, 152);

    b.ellipse(x, y, diameter, diameter);


  }
}


b.go();
