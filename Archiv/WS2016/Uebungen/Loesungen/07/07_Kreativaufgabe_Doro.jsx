﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.units(b.MM);
b.clear(b.doc());
b.noStroke();

var imgCount = 10; 
var allImages = [];

// Array mit Bildern
for(i = 1; i <= imgCount; i++){
  var imageName = "banana" + i + ".png";
  allImages.push(imageName);
}

// Array mit zufälligen Zahlen
var numbers = [];
for (i = 1; i < 500; i++){
  var randomNumbers  = b.round(b.random(1, 9));
  numbers.push(randomNumbers);
}

for(i = 0; i < numbers.length; i++){
  var scale = 10;
  var x = b.random(0, b.width);
  var y = b.random(0, b.height);
  
  var img = b.image(allImages[numbers[i]], 10, 10);
  var imgWidth = b.itemWidth(img)*scale;
  var imgHeight = b.itemHeight(img)*scale;

  var randomScaleX = b.random(0.3, 1.7);
  var randomScaleY = b.random(0.3, 1.7);
  b.transformImage(img, x, y, imgWidth*randomScaleX, imgHeight*randomScaleY);   
}

}
b.go();
