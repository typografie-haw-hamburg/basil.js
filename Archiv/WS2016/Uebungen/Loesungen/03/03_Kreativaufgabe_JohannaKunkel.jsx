﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());

b.units(b.MM);

b.noStroke();


for (var i = 0; i < 10; i++) {

var circ = 200;

var circX = b.random(0, b.width);
var circY = b.random(0, b.height);

var color1 = b.color(220, 199, 222);
var color2 = b.color(183, 230, 212);

if (circY >= b.height / 2 ) {
    b.fill(color1);
  }
  else {
    b.fill(color2);
  }

var circle = b.ellipse(circX, circY, circ, circ);

b.opacity(circle, 50);

}

b.noFill();

b.stroke(0,230,120);

b.beginShape();

for (var i = 0; i < 50; i++) {

var verX = b.random(0, b.width);
var verY = b.random(0, b.height);

  b.vertex(0,0),
  b.vertex(verX, verY);
  b.vertex(b.width, b.height);

}

b.endShape();

b.noStroke();
b.stroke(212, 30, 120);

b.beginShape();

for (var i = 0; i < 50; i++) {

var verX = b.random(0, b.width);
var verY = b.random(0, b.height);

  b.vertex(0,b.height),
  b.vertex(verX, verY);
  b.vertex(b.width, 0);

}

b.endShape();




}

b.go();
