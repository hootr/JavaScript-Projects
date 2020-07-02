function validateForm() {
  var a = document.forms["contact"]["First Name"].value;
  var b = document.forms["contact"]["Last Name"].value;
  var c = document.forms["contact"]["E-mail"].value;
  var d = document.forms["contact"]["message"].value;
  if (a =="") {
    alert("First Name is Required!");
    return false;
  }
  if (b == "") {
    alert("Last Name is required!");
  }
  if (c == "") {
    alert("E-mail address required!");
  }
  if (d == "") {
    alert("Just say Hello!");

  }
 }