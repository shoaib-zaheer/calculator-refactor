function calc(a, b, op) {
  
  // read & process user input from event
  var a = parseInt(document.querySelector("#value1").value); // user input value 1 here
  var b = parseInt(document.querySelector("#value2").value); // user input value 2 here
  var op = document.querySelector("#operator").value; // user select an option here
  
  
  // pass user input through core logic
  var calculate; // user click here to calculate result
  
  // render output to DOM for user
document.getElementById("result").innerHTML = a + op + b + "=" + calculate; // this is printed in screen
  
// log user action for developers
console.log(calculate) // this is printed only in browser 
  
// return true for the browser
  return true;
}

