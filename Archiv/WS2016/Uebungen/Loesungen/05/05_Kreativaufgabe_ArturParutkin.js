﻿#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {

  b.clear( b.doc() );

 // textframe Size
  var size = 100;
  var border = 50;
  b.strokeWeight(1);

   // choose random text
   //var texts = ["cage.txt","schroedinger.txt","planeten.txt"];
   //var r = b.floor(b.random(texts.length));
   //var text = b.loadString(texts[r]);

  //var title = "hegel10001.txt";
  //var title = "schroedinger.txt";
  var title = "cage.txt";
  var text = b.loadString( title );

  b.text(title, 50, 50, 100, 50);  // überschrift
  var tf = b.text(text, 50, 100, 100, 200);




  var stories = b.stories(b.doc());




  while(tf.overflows) {

    tf2 = b.text('', b.random(border, b.width-size), b.random(border, b.height-size), size, size);
    b.linkTextFrames(tf, tf2);

    var b1 = b.bounds(tf);
    var b2 = b.bounds(tf2);

    b.line(b1.right,b1.bottom, b1.right, b2.top);
    b.line(b1.right,b2.top, b2.left, b2.top);

    tf = tf2;
  }

}


b.go();

