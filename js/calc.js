// simple calc

let result = document.getElementById("result");
let equation = "";

document.addEventListener("keydown", function (event) {
  if (/\d/.test(event.key)) {
    // check if key is a number
    calculate(event.key);
  } else if (event.key === ".") {
    calculate(".");
  } else if (event.key === "+") {
    calculate("+");
  } else if (event.key === "-") {
    calculate("-");
  } else if (event.key === "*") {
    calculate("*");
  } else if (event.key === "/") {
    calculate("/");
  } else if (event.key === "Backspace") {
    backspace();
  } else if (event.key === "Enter" || event.key === "=") {
    calculate("=");
  }
});
// clear functions
function backspace() {
  equation = equation.slice(0, -1);
  result.value = equation;
}

function clearResult() {
  result.value = "";
  equation = "";
}
// plusMinus key
/**
 * Toggles the sign of the equation by adding or removing a negative sign at the beginning.
 * If the equation starts with a negative sign, it is removed. Otherwise, a negative sign is added.
 */

function toggleSign() {
  // Check if the equation starts with a negative sign
  if (equation.startsWith("-")) {
    // Remove the negative sign
    equation = equation.slice(1);
  } else {
    // Add a negative sign
    equation = "-" + equation;
  }
  // Update the field with the new equation
  result.value = equation;
}

// calculate functions get one argument and check conditional statement
function calculate(value) {
  if (value === "=") {
    try {
      // evaluate the expression using eval() function
      let resultValue = eval(equation);

      // update equation with the previous result
      equation = resultValue.toString();

      // update the result value
      result.value = equation;
    } catch (error) {
      result.value = "Error";
    }
  } else if (value === "C") {
    result.value = "";
    equation = "";
  } else if (value === "&#x232b;") {
    equation = equation.slice(0, -1);
    result.value = equation;
  } else if (value === "sqrt(") {
    equation += value;
    result.value = equation;
  } else if (value === "^") {
    equation += "**";
    result.value = equation;
  } else if (equation === "" && "0+-*/^=)".includes(value)) {
    // do nothing if equation is empty and value is an operator or equals sign
  } else {
    equation += value;
    result.value = equation;
  }
}
