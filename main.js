song1 = "";
song2 = "";

function preload() {
    song1 = loadSound("Believer(PagalWorld).mp3");
}

function setup() {
    canvas = createCanvas(600 , 500);
    canvas.center();
   
    video = createCapture(VIDEO);
    video.hide();
   //Adding code to initialize posenet model
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('poses' , gotPoses);
   }

   function draw() {
    image(video, 0 , 0 , 600, 500 );
   }

   