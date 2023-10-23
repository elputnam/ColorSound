let sound;

function preload(){
  soundFormats('mp3');
  sound = loadSound('media/mozart')
}

//CCapture
// var capture = false; // default is to not capture frames, can be changed with button in browser
var capturer = new CCapture({
  format:'webm', 
  workersPath: 'js/',
  framerate: 30
});

function setup() {
let cnv = createCanvas(1920, 1080);

 colorMode(HSB, 360, 100, 100, 100)
 cnv.mouseClicked(toggleSound);
 background(0);
 amplitude = new p5.Amplitude();
//frameRate(30);



}

function draw() {
  //if (frameCount==1) capturer.start(); // start the animation capture
  let level = amplitude.getLevel();
  let hugh = map(level, 0, 1, 0, 360);
  background(hugh+180, 100, 50, 10);


  
  print(frameCount);
}


function toggleSound(){
  if (sound.isPlaying()) {
    sound.stop();
  } else {
    sound.play();
  }
}



function save_record() {
  capturer.save();
}

