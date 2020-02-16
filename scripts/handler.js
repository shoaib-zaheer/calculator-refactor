function calc() {
  // read & process user input from event
    /* var a = document.querySelector('#value1').value; // document will call querySelector to take string from html file*/
    let a = Number(document.querySelector('#value1').value); //with parseInt we convert the string to number.
    let b = Number(document.querySelector('#value2').value); 
    let op = document.querySelector("#operator").value;
    let calculate = doMath(op, a, b);
  // pass user input through core logic

  // render output to DOM for user
  // document.querySelector("#result").addEventListener(scalculateHandler, () =>{
   document.querySelector("#result").innerHTML = calculate;
  // log user action for developers
    console.log(calculate);
  // return true for the browser
  return true;
}