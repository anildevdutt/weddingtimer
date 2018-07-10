let flower;
const weddingDay = new Date("August 19, 2018");
let f = [];
let ang  = 0;
const imgSize = 40;
let a = 0;
const flowersCount = 40;
let timer;
//let dataJson;

function preload() {
    flower = loadImage("img/flower.svg");
    //dataJson = JSON.parse("[" + pdata + "]");
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
    
    let msg1 = createElement("h2", "The time has come. It's Komali's Wedding......<br>On " + weddingDay.toDateString());
    msg1.addClass("msg1");
    
    let msg2 = createElement("h2", "Everyone wish her or tease her as much as you want. The time remaning is");
    msg2.addClass("msg2");
    
    timer = createElement("h2", "00:00:00:00");
    timer.addClass("timer");
    
    t.child(msg1);
    t.child(msg2);
    t.child(timer);
    
    // let n = [];
    // let p = [];
    // let m = [];
    
    // let mi = createElement("div");
    // mi.addClass("mi");
    
    // let fi = createElement("form");
    // fi.attribute("method", "POST");
    // fi.attribute("action", "writedata.php");
    
    // let ni = createInput("", "text");
    // ni.addClass("ni");
    // ni.attribute("placeholder", "Name");
    // ni.attribute("name", "uname");
    
    // let pi = createElement("textarea");
    // pi.addClass("pi");
    // pi.attribute("rows", 4);
    // pi.attribute("placeholder", "Write something...");
    // pi.attribute("name", "msg");
    
    // let bi = createInput("Post", "submit");
    // bi.addClass("bi");
    
    // fi.child(ni);
    // fi.child(pi);
    // fi.child(bi);
    // mi.child(fi);
    
    // let i = 0;
    // for(post of pdata) {
    //     let po = JSON.parse(post);
    //     m.push(createElement("div"));
    //     m[i].addClass("m");
    //     n.push(createElement("h2", po["uname"]));
    //     n[i].addClass("n");
    //     p.push(createElement("h3", po["message"]));
    //     p[i].addClass("p");    
    //     m[i].child(n[i]);
    //     m[i].child(p[i]);    
    //     i+=1;
    // }
    // m.push(createElement("div"));
    // m[0].addClass("m");
    // n.push(createElement("h2", "Firstname Lastname"));
    // n[0].addClass("n");
    // p.push(createElement("h3", "Wish you a very blah blah blah Wish you a very blah blah blah Wish you a very blah blah blah Wish you a very blah blah blahWish you a very blah blah blah"));
    // p[0].addClass("p");    
    // m[0].child(n[0]);
    // m[0].child(p[0]);
    
    // m.push(createElement("div"));
    // m[1].addClass("m");
    // n.push(createElement("h2", "Firstname Lastname"));
    // n[1].addClass("n");
    // p.push(createElement("h3", "Wish you a very blah blah blah Wish you a very blah blah blah Wish you a very blah blah blah Wish you a very blah blah blahWish you a very blah blah blah"));
    // p[1].addClass("p");
    // m[1].child(n[1]);
    // m[1].child(p[1]);
    
    // m.push(createElement("div"));
    // m[2].addClass("m");
    // n.push(createElement("h2", "Firstname Lastname"));
    // n[2].addClass("n");
    // p.push(createElement("h3", "Wish you a very blah blah blah Wish you a very blah blah blah Wish you a very blah blah blah Wish you a very blah blah blahWish you a very blah blah blah"));
    // p[2].addClass("p");
    // m[2].child(n[2]);
    // m[2].child(p[2]);
    
    // m.push(createElement("div"));
    // m[3].addClass("m");
    // n.push(createElement("h2", "Firstname Lastname"));
    // n[3].addClass("n");
    // p.push(createElement("h3", "Wish you a very blah blah blah Wish you a very blah blah blah Wish you a very blah blah blah Wish you a very blah blah blahWish you a very blah blah blah"));
    // p[3].addClass("p");
    // m[3].child(n[3]);
    // m[3].child(p[3]);
    
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