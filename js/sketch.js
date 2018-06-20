let flower;
const weddingDay = new Date("August 19, 2018");
let f = [];
let ang  = 0;
const imgSize = 40;
let a = 0;
const flowersCount = 40;
let timer;

function preload() {
    flower = loadImage("img/flower.svg");
}

function initFlower() {
    for(let i = 0; i < flowersCount; i++) {
       let tmp = [random(windowWidth), -random(windowHeight) - imgSize, random(360), 1, random(10)];
       f.push(tmp);
    }
}

function updateFlower() {
    let offset = sin(a);
    a += 1;
    if(a >= 360)
        a = 0;
    for(let i = 0; i < flowersCount; i++) {
        push();
        if(f[i][1] > windowHeight + imgSize) {
            f[i][0] = random(windowWidth);
            f[i][1] = -random(windowHeight) - imgSize;
            f[i][3] = 1;
        }
        f[i][0] += offset;
        f[i][1] += f[i][3];
        f[i][3] += 0.002 * f[i][4];
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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function createDomElements() {
    
    let t = createElement("div");
    t.addClass("timer-card");
    
    let msg1 = createElement("h2", "It's on " + weddingDay.toDateString());
    msg1.addClass("msg1");
    
    let msg2 = createElement("h2", "We wish you a verry happy null pointer exception");
    msg2.addClass("msg2");
    
    timer = createElement("h2", "00:00:00:00");
    timer.addClass("timer");
    
    t.child(msg1);
    t.child(msg2);
    t.child(timer);
    
    let m = createElement("div");
    m.addClass("m");
    
    let n = createElement("h2", "Firstname Lastname");
    n.addClass("n");
    let p = createElement("h3", "Wish you a very blah blah blah Wish you a very blah blah blah Wish you a very blah blah blah Wish you a very blah blah blahWish you a very blah blah blah");
    p.addClass("p");
    m.child(n);
    m.child(p);
}

function startTimer() {
    setInterval(updateTimer, 1000);
}

function updateTimer() {
    let etaMilliseconds = weddingDay - Date.now();
    let etaDays = Math.floor(etaMilliseconds / 86400000);
    let etaHours = Math.abs(Math.floor((etaMilliseconds % 86400000) / 3600000));
    let etaMinutes = Math.abs(Math.floor((etaMilliseconds % 3600000) / 60000));
    let etaSeconds = Math.abs(Math.floor((etaMilliseconds % 60000) / 1000));
    let eta = ((etaDays > 9 || etaDays < 0) ? etaDays : "0" + etaDays) + ":" + ((etaHours > 9) ? etaHours : "0" + etaHours) + ":" +  ((etaMinutes > 9) ? etaMinutes : "0" + etaMinutes) + ":" + ((etaSeconds > 9) ? etaSeconds : "0" + etaSeconds);
    timer.html("ETA: " + eta);
}

function setup() {
    initFlower();
    angleMode(DEGREES);
    imageMode(CENTER);
    pixelDensity(1);
    let cnv = createCanvas(windowWidth,windowHeight);
    cnv.class("pscontainer");
    createDomElements();
    startTimer();
}

function draw() {
    clear();
    //image(bg, 0, 0);
    updateFlower();
}