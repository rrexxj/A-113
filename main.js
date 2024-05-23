var canvas, video, filter;

function preload() {}

function setup() {
canvas = createCanvas(600, 600);
canvas.center()

video = createCapture(VIDEO)
video.hide();

filter = "";
}

function draw() {
image(video, 0, 0, 600, 600);
tint(filter)
}

function applyFilter() {
    filter = document.getElementById("Color").value;
}

function takeSnapshot() {
    save("myPhoto.png")
}