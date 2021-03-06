// examples of of how to transition between slides
// requires the Ani library by Benedikt Groß
import de.looksgood.ani.*;

//Problem: Meine Daten werden nicht in der Json-Datei gespeichert 
//und ich finde den Fehler nicht :(
     
   //colors
      float r, g, b;
      color bgColor;
      
   //Animation
      float mX = 0;
      float mY = 0;
      
      AniSequence seq;
      
  //Circle preset
      float uiOpacity = 255; 
      float circleOpacity; 
      
      Circle c;
      float radius = 40;
      boolean showCircle = false;


//––– question preset ––––
              int i;
              int userId = 1;
              int startTime;
              
       // question counter 1      
              
              JSONArray answers1 = new JSONArray();
              String[] questions1 = {
                "aktiv",
                "groß",
                "schnell",
                "alt",
                "ruhig"};
                
      // question counter2
              int j;
              
              JSONArray answers2 = new JSONArray();
              String[] questions2 = {
                "passiv",
                "klein",
                "langsam",
                "jung",
                "gestresst"};
        
     // question counter3
              int k;
              
              JSONArray answers3 = new JSONArray();
              String[] questions3 = {
                "wütend",
                "besorgt",
                "entspannt",
                "offen",
                "leicht"}; 
        
     // question counter4
              int l;
              
              JSONArray answers4 = new JSONArray();
              String[] questions4 = {
                "friedfertig",
                "sorglos",
                "erregt",
                "geschlossen",
                "schwer"};



// ---- GLOBAL VARIABLES ---- //
void setup() {
              size(1024, 576);
              textSize(20);
              textAlign(CENTER);
              noFill();
              stroke(255);
              noCursor();
//---- ANIMATON SETUP ----//
  Ani.init(this);

  seq = new AniSequence(this);
  seq.beginSequence();

  seq.beginStep();
  
          // step 1 - Animate the opacity from its current value to 0, at the end call the function nextSlide
          seq.add(Ani.to(this, 0.4, "uiOpacity", 0, Ani.QUAD_OUT, "onEnd:nextSlide")); // Durchsichtigkeit des Kreises
          seq.add(Ani.to(this, 0.4, "radius", radius * 5, Ani.QUAD_OUT)); // Kreis wird immer größer
          seq.endStep();
        
          // step 2 - Animate the opacity from its current value to 255 after a delay of 0.6 seconds
          seq.beginStep();
          seq.add(Ani.to(this, 0.6, 0.6, "uiOpacity", 255, Ani.QUAD_IN)); //Kreis ist sichtbar
          seq.add(Ani.to(this, 0.6, 0.6, "radius", 40, Ani.QUAD_IN)); // Normaler Radius des Kreises
          seq.endStep();

  seq.endSequence();
}

void draw() {
  

  r = map(mouseX, 0, width, 0, 255);
  g = map(mouseY, 0, height, 0, 255);
  b = map(mouseX, width, 0, 0, 255);
  
  bgColor = color(r, g, b);
  background(bgColor);
  
  
  // draw the questions or a thank you screen
        if((i < 5)&&(j < 5)&&(k < 5)&&(l < 5)) {
          textAlign(CORNER);
          textSize(25);
          text("Wie fühlst du dich gerade?", 20, 30);
          textSize(10);
          text("Finde deine Position auf der Fläche.", 20, 50);
          textSize(10);
          textAlign(CENTER);
          text("neutral",width/2,height/2);
          textSize(10);
          textAlign(CORNER, LEFT);
          text(questions1[i], 10, height/2);
          textAlign(CORNER, RIGHT);
          text(questions2[j], width-40,height/2);
          textAlign(CENTER);
          text(questions3[k], width/2,50);
          textAlign(CENTER);
          text(questions4[l], width/2,height-20);

   //draw lines
           line( 55, height/2 -3, width/2-35, height/2 - 3);
           line( width/2 +35, height/2 -3, width-55, height/2 - 3);
           line( width/2, 65, width/2, height/2 -25);
           line( width/2, height/2 +25, width/2, height - 45);
   
   // Letzte Seite: Thank you-Screen
            } else {
              text("Vielen Dank für die Teilnahme. Dein Poster wird erstellt.\n(Zum Fortfahren eine Taste drücken)", width/2, height/2 - 10);
            }
            
  // Circle-Presets at Click and Non-Click
            showCircle = true;
            
            if(showCircle) {
               circleOpacity = uiOpacity;
            } else {
              circleOpacity = 0;
            }
            stroke(255, circleOpacity);
            noFill();
            
            mX = lerp (mX, mouseX, 0.15);
            mY = lerp (mY,mouseY, 0.15);
            
            ellipse (mX, mY, radius * 2, radius * 2);
}

void mouseClicked() {
  

// if all questions have been asked, ignore the click
       if((i > 5)&&(j > 5)&&(k > 5)&&(l > 5)) {
       return;
       }
// if nothing has been clicked yet a new circle will be drawn 
       showCircle = false;
       if(showCircle == false) {
          
              
           showCircle = true;
           c = new Circle(); 
           
//Otherwise: Save Mouse-Data to JSON           
    } else {
      

   
      JSONObject answer1 = new JSONObject();

        answer1.setFloat("x", c.xPos);
        answer1.setFloat("y", c.yPos);
        answer1.setFloat("r", red(c.posColor));
        answer1.setFloat("g", green(c.posColor));
        answer1.setFloat("b", blue(c.posColor));
        
        answers1.setJSONObject(i, answer1);
      
      JSONObject answer2 = new JSONObject();
      
        answer2.setFloat("x", c.xPos);
        answer2.setFloat("y", c.yPos);
        answer2.setFloat("r", red(c.posColor));
        answer2.setFloat("g", green(c.posColor));
        answer2.setFloat("b", blue(c.posColor));
        
        answers2.setJSONObject(j, answer2);
      
      JSONObject answer3 = new JSONObject();
      
        answer3.setFloat("x", c.xPos);
        answer3.setFloat("y", c.yPos);
        answer3.setFloat("r", red(c.posColor));
        answer3.setFloat("g", green(c.posColor));
        answer3.setFloat("b", blue(c.posColor));
        
        answers3.setJSONObject(k, answer3);
      
      JSONObject answer4 = new JSONObject();
      
        answer4.setFloat("x", c.xPos);
        answer4.setFloat("y", c.yPos);
        answer4.setFloat("r", red(c.posColor));
        answer4.setFloat("g", green(c.posColor));
        answer4.setFloat("b", blue(c.posColor));
        
        answers4.setJSONObject(l, answer4);
      
// Jump to next question: Increasing i 
      i++;
      showCircle = false;
      j++;
      showCircle = false;
      k++;
      showCircle = false;
      l++;
      showCircle = false;
      
      if((i > 4)&&(j > 4)&&(k > 4)&&(l > 4)) {
        // if all questions have been asked we write the JSON array answers to a file
        
        String fileName = "data/answers_user_" + userId + ".json";
        saveJSONArray(answers1, fileName);
        userId++;
      }
      
    else {
      // ... else when the circle was not clicked, we redraw the circle at the new position
      
      c = new Circle();
    }
    
  };

}
void mouseReleased () {
    if((i < 5)&&(j < 5)&&(k < 5)&&(l < 5)) {
      seq.start ();
    }
}
void keyReleased() {
  
  // if all questions have been answered and a key is pressed, a new round of questions starts
  if(i > 4) {
     i = 0;
     j = 0;
     k = 0;
     l = 0;
     
  }

}

// circle class that saves position and color of the circle to be drawn
class Circle {
  float xPos = mouseX;
  float yPos = mouseY; 
  color posColor = bgColor;
  
  void display() {
    ellipse(xPos, yPos, radius * 2, radius * 2);
  }
}

void nextSlide () {
  if ((i < 5)&&(j < 5)&&(k < 5)&&(l < 5)) {
    i++;
    j++;
    k++;
    l++;
  } else {
    i = 0;
    j = 0;
    k = 0;
    l = 0;
  }
}