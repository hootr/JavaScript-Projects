function age_function() {
    age = document.getElementById("age") .value;
    if (age >= 18) {
        vote = "you are old enough to vote";
    }
    else {
        vote = "you are not old enough to vote";
    }
    document.getElementById("how_old_are_you") .innerHTML = vote
}

function drink() {
    legal = document.getElementById("legal") .value;
    if (legal >= 21) {
        consume = "You are old enough to buy alcohol";
    }
    else {
        consume = "You are not old enough to buy alcohol";
    }
    document.getElementById("buy") .innerHTML = consume
}

function time_function() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply = "It is morning time!";
    }
    else if (time > 12 == time < 18) {
        reply = "it is the afternoon";
    }
    else {
        reply = "it is evening time";
    }
    document.getElementById("time_of_day").innerHTML = reply;
}

var X = 30
function add_numbers_1() {
    
    document.write(20 + X + "<br>") ;
}
function add_numbers_2() {
    document.write(X + 100);
}
add_numbers_1();
add_numbers_2();




function get_date() {
    if (new Date() .getHours() < 23){
        document.getElementById("greeting") .innerHTML ="How are you today"
    }
}

