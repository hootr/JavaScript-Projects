document.write(typeof 8)

function my_function() {
    document.getElementById("test") .innerHTML = isNaN('1442');
}

function nan() {
    document.getElementById("nan") .innerHTML = 0/0
}

function number() {
    document.getElementById("number") .innerHTML = isNaN("not a number");
}

document.write(2E310);
document.write(-2E310);
document.write(10 > 2);
document.write(10 < 2);
console.log(9 + 9)
console.log(10<2);
document.write(5==15);
document.write(5==5);

x = 5;
y = 5;
document.write(x === y);

x = 6;
y = 7;
document.write(6 === 7);

document.write(4 > 1 && 15 > 4);

document.write(1 > 4 && 4 > 15);

document.write(6 > 15 || 10 > 6 );

document.write(15 > 15 || 6 > 15 );

function not() {
    document.getElementById("not") .innerHTML = !(40 > 30);
}


