// Snow Functions

function makeSnow() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: randomInt(1, 5)
    };
}

function createSnowArray(total) {
    let temp = [];
    for (let n = 1; n <= total; n++) {
        temp.push(makeSnow());
    }
    return temp;
}

function drawSnow(aSnow) {
    fill("white")
    circle(aSnow.x, aSnow.y, aSnow.r, "fill")
}

function moveSnow(aSnow) {
    aSnow.x += randomInt(-2, 3);
    aSnow.y += randomInt(-3, 5);
    if (aSnow.y > cnv.height) {
        aSnow.y = 0;
        aSnow.x = randomInt(0, cnv.width);
    }
}