let flower;
const weddingDay = new Date("August 19, 2018");
let f = [];
let ang  = 0;
const imgSize = 40;
let a = 0;

function preload() {
    flower = loadImage("img/flower.svg");
}

function initFlower() {
    for(let i = 0; i < 30; i++) {
       let tmp = [random(windowWidth), -random(600) - imgSize, random(360), 1, random(10)];
       f.push(tmp);
    }
}

function updateFlower() {
    let offset = sin(a);
    a += 1;
    if(a >= 360)
        a = 0;
    for(let i = 0; i < 30; i++) {
        push();
        if(f[i][1] > 600 + imgSize) {
            f[i][0] = random(windowWidth);
            f[i][1] = -random(600) - imgSize;
            f[i][3] = 1;
        }
        f[i][0] += offset;
        f[i][1] += f[i][3];
        f[i][3] += 0.001 * f[i][4];
        translate(f[i][0], f[i][1]);
        rotate(f[i][2]);
        if(f[i][2] < 360) {
            f[i][2] += 1;
        } else {
            f[i][2] = 0;
        }
        image(flower, 0, 0, imgSize+(f[i][4] * 2), imgSize+(f[i][4] * 2));
        pop();
    }
}

function setup() {
    initFlower();
    angleMode(DEGREES);
    imageMode(CENTER);
    createCanvas(windowWidth,600);
    textSize(36);
    textAlign(CENTER);
    textFont("sans-serif");
    textStyle(BOLD);
    fill("#d600f7");
}

function draw() {
    background("rgba(255, 255, 204, 0.8)");
    updateFlower();

    let etaMilliseconds = weddingDay - Date.now();
    let etaDays = Math.floor(etaMilliseconds / 86400000);
    let etaHours = Math.floor((etaMilliseconds % 86400000) / 3600000);
    let etaMinutes = Math.floor((etaMilliseconds % 3600000) / 60000);
    let etaSeconds = Math.floor((etaMilliseconds % 60000) / 1000);
    
    let eta = ((etaDays > 9) ? etaDays : "0" + etaDays) + ":" + ((etaHours > 9) ? etaHours : "0" + etaHours) + ":" +  ((etaMinutes > 9) ? etaMinutes : "0" + etaMinutes) + ":" + ((etaSeconds > 9) ? etaSeconds : "0" + etaSeconds);
    text(weddingDay.toString(), windowWidth/2, 150);
    text("Log Horizon: A point of no return", windowWidth/2, 250);
    text("ETA: " + eta, windowWidth/2, 350);
    
};