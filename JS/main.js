// Make It Snow

let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

let snow = createSnowArray(100);

requestAnimationFrame(draw);
function draw() {
    //Clear canvas
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    //Move and draw Snow
    for (let i = 0; i < snow.length; i++) {
        moveSnow(snow[i])
        drawSnow(snow[i]);
    }

    requestAnimationFrame(draw);
}

document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
    if (event.keyCode === 39) { //Right Arrow Key
        //Add new random snowflake
        snow.push(makeSnow());
    } else if (event.keyCode === 37) { //Left Arrow Key
        //Remove the last snowflake in the array
        snow.pop();
    }
}