noseX=0;
noseY=0;
function preload(){
    mustache_image=loadImage('https://i.postimg.cc/vBk9pLTD/imageedit-3-3666715204.png');
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(470,170);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }
function take_snapshot(){
    save('my_filter_picture');
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache_image,noseX,noseY,50,50);
}
    function modelLoaded(){
    console.log('PoseNet is Initialized now');
}
function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-22;
    noseY = results[0].pose.nose.y;
    console.log("nose x="+noseX);
    console.log("nose x="+noseY);
  }
}

