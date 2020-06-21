var A = 'Hello Everyone, welcome'; { // Creats a Pop up alert when entering the page
    window.alert(A);

}

var Games = "Titles" , PUBG = "PlayerUnknownsBattlegorunds" , CODMW = "Call of Duty Modern Warfare" , GTAV = "Grand Theft Auto 5" , Spyro = "Spyro The Dragon"; // set variables
var blue = "PUBG";                  /////// Giving the Variables colors
var blue = blue.fontcolor("blue");
var red = "CODMW";
var red = red.fontcolor("red");  
var green = "GTA5";
var green = green.fontcolor("green");
var purple = "Spyro";
var purple = purple.fontcolor("purple");
document.write(blue, red, green, purple); ////       End of Variable colors

document.write(5+10);

function My_first_function(){ // Designating a function 
    var str = "the text should be green"; // what the text will say when function is accomplished
    var result = str.fontcolor("pink"); // color of the text that will be displayed
    document.getElementById("Pink") .innerHTML = result; // where to get the ID on the page
}





