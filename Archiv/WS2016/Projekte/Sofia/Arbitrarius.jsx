// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// script asks for name, Randomizes the position of the pathpoints of the text, saves pdf + prints

function draw() {

  var doc = b.doc();
  var page = b.page(1);

  b.units(b.PT);

  // indesign dialog
  var yourName = prompt("What's your name?");
  b.println(yourName);


  // paragraph styles
  var informationParagraphStyle = doc.paragraphStyles.itemByName("information");
  var nameParagraphStyle = doc.paragraphStyles.itemByName("name");
  var hiParagraphStyle = doc.paragraphStyles.itemByName("hiMyNameIs");
  var transformationParagraphStyle = doc.paragraphStyles.itemByName("transformation");

  // "hi,my name is" textframe
  var hiWidth = 160.819;
  var hiHeight = 84.591;
  var hiX = 44.656;
  var hiY = 18.439;

  var hiTF = b.text("hi,my name is", hiX, hiY, hiWidth, hiHeight);
  hiTF.parentStory.appliedParagraphStyle = hiParagraphStyle;
  b.delay(1000);

  // "name" textframe
  var textWidth = b.width;
  var textHeight = 100;
  var textX = b.random(0, 30);
  var textY = b.random(b.height / 4, b.height / 3 * 2);

  var yourNameTF = b.text(yourName, textX, textY, textWidth, textHeight);
  yourNameTF.parentStory.appliedParagraphStyle = nameParagraphStyle;

  // "name" textoverflow
  var pointSize = yourNameTF.parentStory.pointSize;
  while(yourNameTF.overflows == true) {
    pointSize--;
    b.typo(yourNameTF, "pointSize", pointSize);
  }


  yourNameTF.createOutlines(); // outlines

  var outlinesObj = doc.polygons.item(0);

  outlinesObj.select();

  var outlinePath = app.selection[0].paths;
  var outlinePathCount = app.selection[0].paths.count();

  // randomize pathpoint position
  for(i = 0; i < outlinePathCount; i++) {

    var myPath = outlinePath.item(i);
    var pathPointLength = myPath.pathPoints.length;

    for(var pathPointCount = 0; pathPointCount < pathPointLength; pathPointCount++) {
      var pathPoint = myPath.pathPoints.item(pathPointCount);

      var anchorPosition = pathPoint.anchor;
      var rightDirect = pathPoint.rightDirection;
      var leftDirect = pathPoint.leftDirection;

      var anchorX = anchorPosition[0];
      var anchorY = anchorPosition[1];
      var rightX = rightDirect[0];
      var rightY = rightDirect[1];
      var leftX = leftDirect[0];
      var leftY = leftDirect[1];

      var randomX = b.random(-150, 150);
      var randomY = b.random(-150, 150);
      var randomLeftX = b.random(-100, 100);
      var randomLeftY = b.random(-100, 100);
      var randomRightX = b.random(-100, 100);
      var randomRightY = b.random(-100, 100);

      var randomArray = [0, 1, 0, 0, 0];
      var randomArrayPosition = b.floor(b.random(0, randomArray.length));
      var randomNum = randomArray[randomArrayPosition];

      if(randomNum === 1) {
        pathPoint.anchor = [anchorX + randomX, anchorY + randomY];
        pathPoint.rightDirection = [rightX + randomRightX, rightY + randomRightY];
        pathPoint.leftDirection = [leftX + randomLeftX, leftY + randomLeftY];
        b.delay(50);
      }// if

    }// inner forLoop
  }// outer forloop


  // additional information textframes
  var arbitrarius = b.text("arbitrarius", 9.752, 412.745, 41, 5.5);
  arbitrarius.rotationAngle += 90;
  arbitrarius.parentStory.appliedParagraphStyle = informationParagraphStyle;

  var how = b.text("how do you assign meaning to symbols?", 9.752, 279.65, 150, 18);
  how.rotationAngle += 90;
  how.parentStory.appliedParagraphStyle = informationParagraphStyle;

  var concept = b.text("concept, design, coding: Sofia Star", 277.781, 410.91, 93, 40);
  concept.rotationAngle += 90;
  concept.parentStory.appliedParagraphStyle = informationParagraphStyle;

  var haw = b.text("HAW Hamburg, 2016/17", 277.781, 252.41, 77, 5.5);
  haw.rotationAngle += 90;
  haw.parentStory.appliedParagraphStyle = informationParagraphStyle;

  var mentored = b.text("mentored by Heike Grebin, Timo Ogrzal,Timo Rychert", 277.109, 109.91, 97, 40);
  mentored.rotationAngle += 90;
  mentored.parentStory.appliedParagraphStyle = informationParagraphStyle;

  var date = "generated on " + b.nf(b.day(), 2) + "/" + b.month() + "/" + b.year() + " at " + b.hour() + ":" + b.minute();
  if(b.minute() < 10) {
    date = b.nf(b.day(), 2) + "/" + b.month() + "/" + b.year() + ", " + b.hour() + ":0" + b.minute();
  }// if

  var dateTF = b.text(date, 9.752, 100.904, 79.14, 20);
  dateTF.rotationAngle += 90;
  dateTF.parentStory.appliedParagraphStyle = informationParagraphStyle;

  // Print
  b.doc().print(false);
  doc.pages[1].print(false);

  // pdf Export
  var exportFile = File("~/Desktop/pdf/" + yourName + b.millisecond() + ".pdf");
  b.doc().exportFile(ExportFormat.pdfType, exportFile);
  b.delay(1000);


  b.clear(page);
  b.delay(5000);
  b.page(2); // wait for the printer
  b.delay(3000);
  b.page(3);// please press space


}// function draw

b.go();
