﻿//@includepath "~/Documents/;%USERPROFILE%Documents";//@include "basiljs/basil.js";function draw() { b.clear(b.doc());b.units(b.MM);for(var i = 0; i < 100; i++) {b.noFill();var x = b.random(0, b.width);var y = b.random(0, b.height);b.beginShape();b.vertex(x, y);b.vertex(y, x);b.vertex(x+10, y);b.endShape();// b.beginShape();// b.vertex(x, y);// b.endShape();}}b.go();