function full_sentence() {
    var part_1 = "I have";
    var part_2 = " made this";
    var part_3 = " into a complete";
    var part_4 = "sentence";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concatenate") .innerHTML = whole_sentence;
}

function slice_method() {
    var sentence = "I will slice this out";
    var section = sentence.slice(7, 12);
    document.getElementById("slice").innerHTML = section;

}

function uppercase() {
    var str = "This will be in uppercase";
    var res = str.toUpperCase();
    document.getElementById("upper").innerHTML = res;
  }

  function search() {
    var str = "Looking for my house "
    var n = str.search("house");
    document.getElementById("search").innerHTML = n;
  }

  function string_method() {
      var x = 190;
      document.getElementById("numbers_to_string") .innerHTML = x.toString();
  }

  function precision_method() {
      var x = 12938.3012987376112
      document.getElementById("pinpoint") .innerHTML = x.toPrecision(10);
  }

  function tofix() {
    var num = 6.7562;
    var x = num.toFixed(2);
    document.getElementById("fix").innerHTML = x;
  }

  function valueof() {
    var str = "Lets see what this does";
    var res = str.valueOf();
    document.getElementById("value").innerHTML = res;
  }