function calc() {
  // read & process user input from event
    /* var a = document.querySelector('#value1').value; // document will call querySelector to take string from html file*/
    var a = parseInt(document.querySelector('#value1').value); //with parseInt we convert the string to number.
    var b = parseInt(document.querySelector('#value2').value); 
    var op = document.querySelector("#operator").value;
    var calculate;
  // pass user input through core logic

  if (op == "add") {
    calculate = a + b;
    } else if (op == "min") {
    calculate = a - b;
    } else if ( op == "div") {
    calculate = a / b;
    } else if (op == "mul") {
    calculate = a * b;
    }
  // render output to DOM for user
  // document.querySelector("#result").addEventListener(scalculateHandler, () =>{
   document.querySelector("#result").innerHTML = calculate;
  // log user action for developers
  //  console.log(calculate);
  // return true for the browser
  return true;
}