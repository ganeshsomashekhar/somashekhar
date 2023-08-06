let r = 700;



function setup(){

    background('#060606');

    createCanvas(windowWidth-3, windowHeight-3, WEBGL);
   
    angleMode(DEGREES);

    colorMode(HSB);

    
    

   

    noFill();
    

    
    


    


}

function draw(){

    var x;
    var y;
    var z;
    var time = deltaTime;

    strokeWeight(random(1, 1.5));
    translate(-20, -30);

    

    
   for(var phi = 0; phi <= 180; phi+=3){

    x = r * cos(phi*2)-50;
    y = r * cos(phi) * cos(phi*2);
   
    
    

    
   
    point(-x, y/1.25);
    
    rotateY(frameCount/8);
    
    
    

    stroke(random(220, 280), random(50, 100), 100);
    
   

      
   } 

  


   
   

   

}