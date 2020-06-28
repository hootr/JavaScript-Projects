function call_loop() { // Function name, should count to 20//
    var digit = "";
    var x = 1;
    while (x < 21){ // should stop when x is less than 21//
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = digit; // calling the loop by element ID
}

function stringlength() { // string length property, function name, should produce number of characters in the string//
    var str = "Hello Hope your day is well."; // my string //
    var n = str.length; /// this is what im looking for the length of my string.//
    document.getElementById("string_length").innerHTML = n; // calling my function // 
  }
// the Following is a FOR loop//
  var instruments = ["Guitar" , "Drums" , "Piano" , "Bass" , "Violin" , "Trumpet" , "flute" ]; // list to be shown//
  var content = "";
  var Y;
  function loop() { // the function the loop will take //
      for (Y = 0; Y < instruments.length; Y++) {
          content += instruments[Y] + "<br>";
      }
      document.getElementById("instruments").innerHTML = content;
  } 

  // Example of Arrays and Objects // 
  function cat_pics() {
      var cat_picture = [];
      cat_picture[0] = "sleeping";
      cat_picture[1] = "playing";
      cat_picture[2] = "eating";
      cat_picture[3] = "purring";
      document.getElementById("cat").innerHTML = "In this picture, the cat is" +
            cat_picture[2] + ".";
  }
// Examples of Constants, the first one is the example from the course///
  function constant_function() {
      const musical_instrument = {type: "guitar" , brand:"fender" , color:"black"};
      musical_instrument.color = "blue";
      musical_instrument.price = "$900";
      document.getElementById("constant_function") .innerHTML = "The Cost of the " +
            musical_instrument.type + "was" + musical_instrument.price;
  }
// My example of a constant//
  function car_price() {
      const price = {type: "Dodge" , model:"Challanger" , color:"Fire Engine Red"};
      price.type ="Dodge";
      price.price = "32k";
      price.model = "challanger";
      document.getElementById("constant").innerHTML = "The cost of the" + price.type +
      price.model + "is" + price.price;
      
  }

  // The LET Example//
  var X = 99;
  document.write(X);
  {
      let X = 100;
      document.write("<br>" + X);
  }
  document.write("<br>" + X);

  // Example of Objects//

  let car = {
      make: "Dodge" ,
      model: "Challenger" ,
      year: "2018" ,
      color: "black" ,
      description : function() {
          return "the car is a " + this.year + this.color + this.make + this.model;
      }
  };
document.getElementById("object").innerHTML = car.description();