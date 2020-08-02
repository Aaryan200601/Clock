function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200, 200);
  rotate(-90);

  let hr = hour()
  let mn = minute();
  let sc = second();

  //Seconds hand and arc
  strokeWeight(8);
  stroke(255, 0, 0);
  noFill();
  let scAngle1 = map(sc, 0, 60, 0, 360);
  arc(0,0, 300, 300, 0, scAngle1);
  push();
  rotate(scAngle1);
  stroke(255, 0, 0);
  line(0, 0, 100, 0);
  pop();

 //Minutes hand and arc
  stroke(0, 255, 0);
  let scAngle2 = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, scAngle2);
  push();
  rotate(scAngle2);
  stroke(0, 255, 0);
  line(0, 0, 75, 0);
  pop();

  //Hours hand and arc 
  stroke(0, 0, 255);
  let scAngle3 = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, scAngle3);
  push();
  rotate(scAngle3);
  stroke(0, 0, 255);
  line(0, 0, 50, 0);
  pop();
}