let r = 500;



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

    strokeWeight(random(.05, 3));
    translate(-20, -30);

    

    
   for(var phi = 0; phi <= 180; phi+=6){

    x = r * cos(phi) + 400;
    y = r * sin(phi) * sin(phi*2) + 300 ;
    z = r * sin(phi) * cos(phi*2);

    
   
    point(-x, y, -z/2);
    rotateX(frameCount/4);
    
    
    stroke(random(200, 300), random(25, 75), random(100, 200));

      
   } 

  


   
   

   

}