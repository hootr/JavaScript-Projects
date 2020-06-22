
function addition_funciton() {
    var addition = 5 + 3;
    document.getElementById("math") .innerHTML = "5 + 3 = " + addition;
}

function subtraction_funciton() {
    var subtraction = 10 - 3;
    document.getElementById("minus") .innerHTML = "10 - 3 = " + subtraction;
}

function multiplication() {
    var simple_math = 4 * 5;
    document.getElementById("multiply") .innerHTML = "4 x 5 = " + simple_math;
}

function division() {
    var divide = 81 / 9;
    document.getElementById("divide") .innerHTML = "81 / 9 = " + divide;
}

function multiple() {
    var multiple = (2 + 7) * 10 / 2 - 5;
    document.getElementById("multiple") .innerHTML = "2 plus 7, multiplied by 10, divided in half and then subtracted by 5 equals," + multiple
}

function remainder() {
    var remainder = 30 % 4;
    document.getElementById("remainder") .innerHTML = "When you divide 30 by 4 you have a remainder of: " + remainder
}

function negation() {
    var Y = 15;
    document.getElementById("negation") .innerHTML = -Y;
}

var B = 5;
B++;
document.write(B)

var A = 7.55;
A--;
document.write(A)

window.alert(Math.random() * 100);

