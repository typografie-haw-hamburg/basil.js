﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.noStroke();

  var imgCount = 128;
  var allImgNames = [];

  for(var i = 0; i < imgCount; i++) {
    var imageName = "Pierrot_" + (i + 1) + ".png";
    allImgNames.push(imageName);
  }

  var pageCount = b.pageCount();

  b.println(allImgNames);

  while(allImgNames.length > 0){
    var randomPage = b.floor( b.random(1, pageCount + 1) );

    b.page(randomPage);

    var randomImageNumber = b.floor(   b.random( 0, allImgNames.length )   );
    var randomImageName = allImgNames[randomImageNumber];

    allImgNames.splice(randomImageNumber, 1);

    var img = b.image(randomImageName, 0, 0);

    var scale = b.random(0.2, 0.6);
    var imgWidth = b.itemWidth(img) * scale;
    var imgHeight = b.itemHeight(img) * scale;

    var x = b.random(b.width - imgWidth);
    var y = b.random(b.height - imgHeight);

    b.transformImage(img, x, y, imgWidth, imgHeight);

  }

}

b.go();
