function preload(){}

function setup(){
    canvas= createCanvas(500 , 400);
    canvas.position(500 , 270);
    video= createCapture(VIDEO);
    video.hide();
    tint_color="";
}

function draw(){
    image(video , 60 , 40, 400 , 300);
    tint(tint_color);

    fill(255, 0 ,0);
    stroke(255, 0 , 0);
    circle(50,50,80);

    fill(255, 0 ,0);
    stroke(255, 0 , 0);
    circle(450,50,80);

    fill(255, 0 ,0);
    stroke(255, 0 , 0);
    circle(50,350,80);

    fill(255, 0 ,0);
    stroke(255, 0 , 0);
    circle(450,350,80);

    fill(0,130,0);
    stroke(0,128,0);
    rect(90,40,320,20);

    fill(0,130,0);
    stroke(0,128,0);
    rect(40,90,20,220);

    fill(0,130,0);
    stroke(0,128,0);
    rect(440,90,20,220);

    rect(90, 340,320,20);

}

function take_snapshot(){
    save('personalized_selfie.png');
}

function filter_tint(){
    tint_color= document.getElementById("color_name").value;
}