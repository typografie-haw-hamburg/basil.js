﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {


b.clear (    b.doc()   );
b.units (b.MM);
b.colorMode(b.RGB);

b.textFont ('Myriad Pro', 'Light');

var c1 = b.color (255,150,150);
var c2 = b.color (0,230,230);

b.noStroke ();
b.fill (c1);
b.rect (b.width/2,0, b.width, b.height);

b.fill (c2);
b.rect (0,0, b.width/2, b.height);
b.strokeWeight (1);

var fruits = [  "apple", "apricot", "avocado", "banana", "bell pepper", "bilberry", "blackberry", "blackcurrant", "blood orange", "blueberry", "boysenberry", "breadfruit", "canary melon", "cantaloupe", "cherimoya", "cherry", "chili pepper", "clementine", "cloudberry", "coconut", "cranberry", "cucumber", "currant", "damson", "date", "dragonfruit", "durian", "eggplant", "elderberry", "feijoa", "fig", "goji berry", "gooseberry", "grape", "grapefruit", "guava", "honeydew", "huckleberry", "jackfruit", "jambul", "jujube", "kiwi fruit", "kumquat", "lemon", "lime", "loquat", "lychee", "mandarine", "mango", "mulberry", "nectarine", "nut", "olive", "orange", "pamelo", "papaya", "passionfruit", "peach", "pear", "persimmon", "physalis", "pineapple", "plum", "pomegranate", "pomelo", "purple mangosteen", "quince", "raisin", "rambutan", "raspberry", "redcurrant", "rock melon", "salal berry", "satsuma", "star fruit", "strawberry", "tamarillo", "tangerine", "ugli fruit", "watermelon"  ];


var x = b.width/2;

for (var i = 0 ; i < fruits.length /1.1 ; i++ ) {

      //var y = b.random (5, b.height-30);
      var y = i*4;

      var fontSize = b.round (  b.random (3,40)  );

      if (fontSize > 35 && i < 40) {

        b.stroke (250,100,100); 
        b.fill (b.color (255,80,80) );
        b.line (0, b.random (0,b.height) , b.width , b.random (0,b.height)  )
        b.textFont ('Myriad Pro', 'Bold');

      }

      else {
        b.fill (b.color (10+i,255-i/2,255) );
        b.textFont ('Myriad Pro', 'Light');
      }
    
      b.textSize (fontSize);
      b.text (fruits [i], x, y, 200,100);

      // if ( b.startsWith ( fruits [i], "a") ) {
      // b.textSize (fontSize);
      // b.text (fruits [i], x, y, 100,40);
          }

for (var j = 0 ; j < fruits.length /1.1 ; j++ ) {

     // var y = b.random (5, b.height-30);
     var y = j*4;

      var fontSize = b.round (  b.random (3,40)  );

      if (fontSize > 35 && j < 40) {
      b.stroke (0,255,255); 
      b.fill (b.color (10,255,255) );
      b.line (0, b.random (0,b.height) , b.width , b.random (0,b.height) );
      b.textFont ('Myriad Pro', 'Bold'); 
      }
      else {
      b.fill (b.color (255,100+j/2,100+j/2) );
      b.textFont ('Myriad Pro', 'Light');
      }

      b.textAlign (Justification.RIGHT_ALIGN );
      b.textSize (fontSize);
      b.text (fruits [j], x-200, y, 200,100);


      // if ( b.startsWith ( fruits [j], "a") ) {
      // b.textSize (fontSize);
      // b.text (fruits [j], x, y, 100,40);
          }

      }


b.go();
