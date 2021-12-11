noseX=0;
noseY=0;
diffrence = 0;
rightWristx = 0;
leftWristx = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on('pose', gotPoses);
}

function draw () {
    background ('#00FFBF');
    fill ('blue');
    stroke ('gray');
    square(noseX,noseY,diffrence);
}

function modelLoaded() {
    console.log('Posenet is Loaded!');
}


function gotPoses(results) {
    if (results.length> 0 ){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX=" + noseX + "noseY = " + noseY);

        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        diffrence = floor(leftWristx-rightWristx);
        console.log("leftwristx =" + leftWristx + "rightwristx =" + rightWristx + "diffrence =" + diffrence);
    }
}