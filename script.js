let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let colors = [
    "#ed3841",
    "#f78e35",
    "#f9ed35",
    "#73bf43",
    "#2dc7f3",
    "#4053a2",
    "#7d4ca0"
];

let coords = [
    [[0, 0], [0, 16], [0, 24]],
    [[8, 0], [8, 8], [16, 8], [8, 16], [8, 24], [16, 24], [24, 24]],
    [
        [32, 8],
        [40, 8],
        [48, 8],
        [32, 16],
        [48, 16],
        [32, 24],
        [40, 24],
        [48, 24]
    ],
    [[56, 8], [64, 8], [72, 8], [56, 16], [56, 24]],
    [[88, 8], [96, 8], [80, 16], [96, 16], [80, 24], [88, 24], [96, 24]],
    [[104, 0], [104, 8], [112, 8], [104, 16], [104, 24], [112, 24], [120, 24]],
    [[128, 8], [136, 8], [144, 8], [128, 16], [144, 16], [128, 24], [136, 24]]
];

let correct = [];

coords.forEach((char, charIndex) => {
    char.forEach(([panelX, panelY]) => {
        for (let pixelIndex = 0; pixelIndex < 64; pixelIndex++) {
            let x = panelX + (pixelIndex % 8) + 4;
            let y = Math.floor(panelY + pixelIndex / 8) + 24;
            let color = colors[charIndex];

            // ctx.fillStyle = color;
            // ctx.fillRect(x, y, 1, 1);
            // console.log({ x, y });
            correct.push({ x, y, color });
        }
    });
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

window.good = 10;
window.bad = 1;

function createGood() {
    let pixel = getRandomInt(correct.length);
    let { x, y, color } = correct[pixel];
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 1, 1);
    setTimeout(createGood, good);
}

function doBad() {
    let x = getRandomInt(160);
    let y = getRandomInt(80);
    let color = `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(
        255
    )})`;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, 1, 1);
}

function createBad() {
    doBad();
    doBad();
    doBad();
    setTimeout(createBad, bad);
}

createGood();
createBad();

// correct.forEach(({ x, y, color }) => {
//     ctx.fillStyle = color;
//     ctx.fillRect(x, y, 1, 1);
//     console.log({ x, y });
// });
