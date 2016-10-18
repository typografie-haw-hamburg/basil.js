﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

//(Kreativaufgabe) Versucht mit eurem Wissen über das bisher gelernte eine interessante Gestaltung bzw. ein interessantes Muster per Script zu erstellen. In eurem Script soll ein Array verwendet werden. Speichert von diesem Design ein JPEG ab (Datei -> Exportieren -> Format JPEG -> Qualität Hoch | Auflösung(ppi): 72).

function draw() {

b.units ( b.MM);
b.clear (document);
 


var drunk = ["drunk", "hammered", "intoxicated", "impaired", "stinko", "wrecked", "pissed", "blotto", "sloshed", "buzzed", "tight", "canned", "baked", "thrashed", "trashed", "tipsy", "smashed", "totaled", "tore up", "gone", "soused", "thirsty", "annihilated", "blitzed", "stoned", "lit", "plastered", "three sheets to the wind", "tanked", "delerious", "friendly", "disorderly", "rowdy", "stewed"];

var random = b.random(0, drunk.length);
var randomRounded = b.floor(random);



for (var y = 1; y < 23; y++) {

    for (var x = 1; x < 20; x++) {
      
      var umfang = 8;
      var posX = x*10.5;
      var posY = y*10.5;
      b.fill(0,0,0);
      var kreis = b.ellipse(posX, posY, umfang, umfang);
      var opa = b.round(b.random(0, 100));
      b.opacity(kreis, opa);

      if (opa > 10 && opa < 20) {
        var random = b.random(0, drunk.length);
        var randomRounded = b.floor(random);
        b.text(drunk[randomRounded], posX, posY-2, 60, 30);
      }
} 
  }


}
b.go();

