var audio
var audioContext

function mousePressed () {
    if(!audioContext){
        audioContext = new AudioContext();

        audio = document.createElement("audio")

        audio.loop = true

        audio.src = "mine/piano.mp3"

        audio.play()

        const contextSource = audioContext.createMediaElementSource(audio)

        contextSource.connect(audioContext.destination)
    }else{
        audio.pause()
        audioContext.close()
        audio = audioContext = null
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    // fill background
    background("black");
  
    fill("white");
    noStroke();
  
    // Draw play/pause button
    const dim = min(width, height);
    if (audioContext) {
      polygon(width / 2, height / 2, dim * 0.1, 4, PI / 4);
    } else {
      polygon(width / 2, height / 2, dim * 0.1, 3);
    }
  }
  
  // Draw a basic polygon, handles triangles, squares, pentagons, etc
  function polygon(x, y, radius, sides = 3, angle = 0) {
    beginShape();
    for (let i = 0; i < sides; i++) {
      const a = angle + TWO_PI * (i / sides);
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
  