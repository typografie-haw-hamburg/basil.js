﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";


function draw() {


b.clear(b.page());
var graph = function(){
    var count = b.second();
    b.println(count);
    b.stroke(255,0,0);
    b.noFill();
    b.beginShape();

      for(var i = 0; i<count; i++){
      if(count == 0){
        count++
        var posX = i*15
      var posY = b.random(b.height/2-300,b.height/2+200);
      b.vertex(posX,posY);
      b.noFill();
      var size = b.random(12,50);
      var textColor= b.color(255,0,0);
      var text = b.text(count,posX,posY,100,100);
      b.typo(text,'pointSize',size);
      b.typo(text,'fillColor',textColor);
      b.typo(text,'appliedFont',"Arial Narrow");
      }else {
      var posX = i*15
      var posY = b.random(b.height/2-300,b.height/2+200);
      b.vertex(posX,posY);
      b.noFill();
      var size = b.random(12,50);
      var textColor= b.color(255,0,0);
      var text = b.text(b.second(),posX,posY,100,100);
      b.typo(text,'pointSize',size);
      b.typo(text,'fillColor',textColor);
      b.typo(text,'appliedFont',"Arial Narrow");
        }
      }


    b.endShape();
}
var minutes = b.minute();

for(var i =0; i<minutes; i++){
  
  if(minutes==0){
    minutes++
    graph();
  }else{
    graph();
  }
}


}
b.go();
