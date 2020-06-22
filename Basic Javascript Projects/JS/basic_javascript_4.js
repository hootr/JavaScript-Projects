function list() {
    var bike = {
        Brand: "Harley",
        Color: "Purple",
        Model: "Dyna ",
        Miles: 20,

        
    };
    delete bike.Color;
    document.getElementById("list") .innerHTML = bike.Color;
}
