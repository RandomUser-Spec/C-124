noseX = 0;
noseY = 0;
difference = 0;
rightwristX = 0;
leftwristX = 0;
leftwristY = 0;
rightwristY = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(450, 400);
    canvas = createCanvas(450, 340);
    canvas.position(560, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console('Model Is Initialized!');
}

function draw()
{
    background('#969A97');
    fill("blue");
    stroke("black");
    //square(noseX, noseY, difference);
    //circle(noseX, noseY, difference);
    triangle(leftwristX, leftwristY, rightwristX, rightwristY, noseX, noseY);
    //ellipse(noseX, noseY, leftwristX, rightwristX);
    //textSize(difference);
    //text('Wai H.', noseX, noseY);
    document.getElementById('square_side').innerHTML = "Width and Height of The Square Is - " + difference;
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log('nose x =' + noseX + 'nose y =' + noseY);
        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;
        difference = floor(leftwristX - rightwristX);
        console.log('leftWrist x =' + leftwristX + 'rightWrist y =' + rightwristX);
    }
}

