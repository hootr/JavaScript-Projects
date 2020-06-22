function vehicle(make, model, year, color) {
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}
var jack = new vehicle("Dodge" ,"Viper" , 2020, "Red");
var emily = new vehicle("Jeep" , "Trail Hawk", 2019, "white and black");
var erik = new vehicle("Ford" , "pinto" , 1971, "mustard");
function myfunction() {
    document.getElementById("keywords_and_constructors").innerHTML =
    "erik drive a" + erik.vehicle_color + "-colored" + erik.vehicle_model +
    "manufactured in" + erik.vehicle_year;
}
function vote() {
    var age, can_vote;
    age = document.getElementById("age") .value;
    can_vote = (age < 18) ? "You are not old enough" : "You are old enough";
    document.getElementById("old") .innerHTML = can_vote + "to Vote";
}