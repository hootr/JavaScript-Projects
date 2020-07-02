function car_selection() {
    var car_output;
    var cars = document.getElementById("car_type").value;
    var car_string = "Thats is a great choice, and selection";
    switch(cars) {
        case "Mercedes":
            car_output = "Mercedes" + car_string;
        break;
        case "Lexus":
            car_output = "Lexus" + car_string;
        break;
        case "Ferrari":
            car_output = "Ferrari" + car_string;
        break;
        case "Ashton Martin":
            car_output ="Ashton Martin" + car_string;
        break;
        case "Porche":
            car_output = "Porche" + car_string;
        break;
        case "Bugatti":
            car_output = "Bugatti" + car_string;
        break;
        default:
            car_output = "Not a option, please enter selection exactly as written from the list.";
    }
    document.getElementById("selection").innerHTML = car_output;
}
 
function Hello_World_Function() {
    var A = document.getElementsByClassName("click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);