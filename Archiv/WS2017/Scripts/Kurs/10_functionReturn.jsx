﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  alert(  sum(5, 13)   );

  alert(  sum(20, 45) );

};

b.go();


function sum (a, b) {
  var result = a + b;
  return result;
};
