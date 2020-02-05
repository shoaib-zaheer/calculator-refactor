function calc() {
  var a = parseInt(document.querySelector("#value1").value); // use "parseInt" to change  the string input to number
  var b = parseInt(document.querySelector("#value2").value); // use "parseInt" to change  the string input to number
  var op = document.querySelector("#operator").value;  // select Area
  var calculate;  // This is click action area for calculate your number
  
  if (op == "add"){
    calculate = a + b;
  } else if (op == "min"){
    calculate = a - b;
  } else if (op == "div"){
  calculate = a / b;
  } else if (op == "mul"){
    calculate = a * b;
  }
  document.querySelector("#result").innerHTML = calculate;
  }
  