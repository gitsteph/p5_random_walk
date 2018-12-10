var canvas;
var first_point_arr;
var second_point_arr;
var starting_x;
var starting_y;

var color;
var from_color;
var to_color;
var lerp_amt;
var lerp_interval;

var current_step;
var num_steps = 40;
var step_degree = 50;


function restart() {
    clear();
    canvas = createCanvas(windowWidth * 0.98, windowHeight * 0.97);
    background(0);
    starting_x = windowWidth * 0.98 / 2;
    starting_y = windowHeight * 0.97 / 2;
    from_color = color(255, 0, 255, 0.2 * 255);
    to_color = color(0, 255, 255, 0.2 * 255);
    current_step = 0;

    // set starting vertices
    first_point_arr = [starting_x, starting_y];
    second_point_arr = [starting_x, starting_y];
    lerp_amt = 0;
    lerp_interval = 1.00/num_steps;

    stroke(253 - 50, 95 - 50, 0 - 50);
    textSize(60);
    fill(253, 95, 0, 100);
    text("a random walk", 10, 60);

    textSize(30);
    fill(255, 0, 153, 100);
    text(`${num_steps} steps of ${step_degree} pixel size`, 10, 100);

    textSize(25);
    stroke(from_color);
    fill(from_color, 150);
    text("starting color", 10, 130);

    textSize(25);
    stroke(to_color);
    fill(to_color, 150);
    text("ending color", 160, 130);
}

function setup() {
    restart();
    strokeWeight(3);
}

function take_step() {
    // select next vertices
    first_point_arr = second_point_arr;
    second_point_arr = [
        second_point_arr[0] + random(1, -1) * step_degree,
        second_point_arr[1] + random(1, -1) * step_degree
    ];

    // draw new line
    line(
        first_point_arr[0], first_point_arr[1],
        second_point_arr[0], second_point_arr[1]
    );
    current_step += 1;
}

function draw() {
    color = lerpColor(from_color, to_color, lerp_amt);

    if (current_step < num_steps) {
        stroke(color);
        take_step();
        frameRate(4);
    }
    lerp_amt += lerp_interval;
}
