﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {



b.units(b.MM);
b.clear(b.doc());

b.beginShape(b.CLOSE);
b.colorMode(b.CMYK);
b.fill(20,50,0,20);
b.noStroke();
var rect = b.rect(0, 0, b.width, b.height);


for(var i = 0; i < 9; i ++){
  var x = 0+(i*(b.width/10));
  var y = 0;


b.fill(4, 4, 4, 4);
b.stroke(4,100,4,4);
b.strokeWeight(4);
var random = b.random(4, b.height);

if (random < b.height/2){
var rect2 = b.rect(x, random, 10, 200);
b.noFill();
b.strokeWeight(1);
b.vertex(x, random);
}

else {
b.noFill();
b.strokeWeight(1);
b.vertex(x, random);
}

}
b.endShape();

}
b.go();
