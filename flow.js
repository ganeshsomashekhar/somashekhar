var points = [];
var mult = 0.001;


function setup() {


  if(windowWidth > 795 && windowHeight > 795){

    canvas = createCanvas(windowWidth, windowHeight);

  }
  else{

    canvas = createCanvas(windowWidth*4, windowHeight*4);

  }
  
  background('#060606');
  angleMode(DEGREES);
  

  var density = 45;

  var space = width/density;



  for (var x = 0; x < width; x += space){
       for(var y = 0; y < height; y += space){

        var p = createVector(x, y);
        points.push(p);

       }
  }
  
  
}

function draw() {

  

  noFill();

 
  time = deltaTime/10;
  


  

    for(var i = 0; i < points.length; i++){

      var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720);
  
      points[i].add(createVector(cos(angle), sin(angle)))
      
  
      ellipse(points[i].x*1.1, points[i].y*1.1, .1);

      strokeWeight(random(.1, 1));

    if(i%2 == 0){
      stroke(random(50, 100), 0, 255);
    }
    else if(i%2 == 1){
      stroke(0, 0, random(100, 255));

    }
      
      
      
      
    }


  
  
  

  
}

