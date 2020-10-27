// The code is based on a code by:
// Daniel Shiffman
// http://codingtra.in
// Steering Text Paths
// Video: https://www.youtube.com/watch?v=4hA7G3gup-4

let font;
let vehicles = [];

function preload() {
    // https://fonts.google.com/specimen/Heebo
    font = loadFont('./Heebo[wght].ttf');
}

function setup() {
    createCanvas(1200, 800);
    background(51);

    var points = font.textToPoints('ךֵל', 400, 400, 400, {
        sampleFactor: 0.25
    });

    for (var i = 0; i < points.length; i++) {
        var pt = points[i];
        var vehicle = new Vehicle(pt.x, pt.y);
        vehicles.push(vehicle);
    }
}

function draw() {

    background(51);

    for (var i = 0; i < vehicles.length; i++) {
        var v = vehicles[i];
        v.behaviors();
        v.update();
        v.show();
    }
}
