﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {
  b.clear( b.doc() ); // clears previous output, helpful during this tutorial
  
  //General
    b.units(b.MM);
    b.colorMode(b.RGB);
    b.doc().documentPreferences.facingPages = false;
  //Page
     b.bleeds(2);
     b.margins(10);
   //Stroke
     b.stroke(0);
     b.strokeWeight(0.5);
     //b.noStroke();
   //Fill
     b.fill(0);
     //b.noFill();
   //Modes
     b.rectMode(b.CENTER);
     b.ellipseMode(b.CENTER);
   //Text
     b.textFont("OCRB Alternate", "Regular"); 
     b.textTracking(0);
     b.textSize(20);
     b.textLeading(20);
     b.textAlign(Justification.CENTER_ALIGN, VerticalJustification.TOP_ALIGN);

  //General Variables
    var halfX = b.width/2;
    var halfY = b.height/2;
    var myCounter = 20;
    var myColor = b.color(b.random(255), b.random(255), b.random(255));
    var myScale = 10;

  //show date in console
    b.println( 
      b.nf(b.day()) + "." 
      + b.month() + "." 
      + b.year() + ", " 
      + b.hour() + ":" 
      + b.nf(b.minute()) + " Uhr"
    );

  
  b.layer("Background");
  b.fill(myColor);
  var background = b.rect(halfX, halfY, b.width, b.height);
  b.opacity(background, 50);

  b.layer("Kreativaufgabe-1");

  //(Kreativaufgabe) Versucht mit eurem Wissen über das bisher gelernte eine interessante Gestaltung bzw. ein interessantes Muster per Script zu erstellen. In eurem Script soll ein Array verwendet werden. Speichert von diesem Design ein JPEG ab (Datei -> Exportieren -> Format JPEG -> Qualität Hoch | Auflösung(ppi): 72).

  //Benennt das exportierte JPEG 04_Kreativaufgabe_EuerName.jpg und ladet es in diesen Google Drive-Ordner hoch. Ladet euer Script bitte mit der Benennung 04_Kreativaufgabe_EuerName.jsx in den entsprechenden GitHub-Ordner hoch (oben auf Upload files klicken, Script in das Fenster ziehen, unten mit Commit changes abspeichern).

  var alphabet = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];

  b.stroke(255);
  b.strokeWeight(1);

  for (var i = 0; i < alphabet.length; i++) {

    b.rotate(b.radians( 360 / alphabet.length ));
    b.noFill();
    b.rect(halfX, halfY, halfX, b.height*2 );
    b.fill(255);

    if( i % 2 == 0 ) {
      b.textFont("OCRB Alternate", "Regular");
    } else {
      b.textFont("CelesteST", "Regular");
    }
       
    b.text(alphabet[i], halfX - myScale/2, halfY - halfX/2 + 5, myScale, halfX-10);

  } //Loop End


  b.layer("Kreativaufgabe-2");

  b.textSize(30);
  b.textFont("OCRB Alternate", "Regular");

  var myInput = prompt("Message", "Um diese Totale ganz zu verstehen, müssen wir uns einen Mann vorstellen, der vor sehr langer Zeit durch die Wälder ging auf der Suche nach dem kürzesten Weg zu einem bestimmten Ziel.");
  var inputChars = myInput.split("");

  
  for (var i = 0; i < inputChars.length; i++) {

    b.textSize( 35 - 30 / inputChars.length * i);
    b.rotate(b.radians( 360 / inputChars.length * 2 ));
    b.fill(0);
       
    b.text(
      inputChars[i], 
      halfX - myScale/2, 
      halfY - halfX + halfX / inputChars.length * i * 0.25, 
      myScale, 
      b.width - b.width / inputChars.length * i * 0.25 );

  } //Loop End



};
b.go();
