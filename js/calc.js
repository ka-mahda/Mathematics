// simple calculator

let result = document.getElementById("result");
let equation = "";
/**
 * Listens for keydown events and calls the appropriate function based on the key pressed.
 * If the key is a number, it calls the `calculate()` function with the number as an argument.
 * If the key is a decimal point, plus sign, minus sign, multiplication sign, or division sign,
 * it calls the `calculate()` function with the corresponding operator as an argument.
 * If the key is the backspace key, it calls the `backspace()` function.
 * If the key is the enter key or equals sign, it calls the `calculate()` function with the equals sign as an argument.
 */
document.addEventListener("keydown", function (event) {
  // Check if the pressed key is an F1-F12 key
  if (event.key.startsWith("F") && !isNaN(Number(event.key.slice(1)))) {
    // Prevent the default action of the function key
    event.preventDefault();
    // Do not update the result or perform any other actions
    return;
  }
  // Checks the key pressed and calls the appropriate function based on the key
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
/**
 * Removes the last character from the equation and updates the result field.
 */
function backspace() {
  equation = equation.slice(0, -1);
  result.value = equation;
}
/**
 * Clears the result field and the equation.
 */
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

/**
 * Evaluates the mathematical expression in the equation field and updates the result field.
 * If the value is the equals sign, it uses the `eval()` function to evaluate the expression and update the fields.
 * If the value is "C", it clears the result field and equation.
 * If the value is the backspace symbol, it removes the last character from the equation.
 * If the value is "sqrt(", it adds "sqrt(" to the end of the equation.
 * If the value is "^", it adds "**" to the end of the equation.
 * If the equation field is empty and the value is an operator or equals sign, it does nothing.
 * Otherwise, it adds the value to the end of the equation and updates the result field.
 */
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
  } else if (value === ".") {
    // Check if the equation already contains an operator or the previous value is a number with a dot
    const lastChar = equation.slice(-1);
    if ("+-*/^".includes(lastChar)) {
      return; // Do nothing if the dot is not allowed after an operator
    }

    // Split the equation by operators to get the current number being entered
    const numbers = equation.split(/[-+*/^]/);
    const currentNumber = numbers[numbers.length - 1];

    // Check if the current number already contains a dot
    if (currentNumber.includes(".")) {
      return; // Do nothing if the current number already has a dot
    }

    equation += value;
    result.value = equation;
  } else {
    // Check if the value is an operator
    if ("+-*/^".includes(value)) {
      // Remove any existing operators from the end of the equation
      while ("+-*/^".includes(equation.slice(-1))) {
        equation = equation.slice(0, -1);
      }
    }

    equation += value;
    result.value = equation;
  }
}

// engineering calculator
const basicCalculatorRadio = document.getElementById("basicCalculator");
const engineeringCalculatorRadio = document.getElementById("engineeringCalculator");
const engineeringCalculatorDisplay = document.getElementById("engineeringCalculatorDisplay");

engineeringCalculatorRadio.addEventListener("change", function () {
  if (engineeringCalculatorRadio.checked) {
    engineeringCalculatorDisplay.classList.remove("hidden");
  }
});

basicCalculatorRadio.addEventListener("change", function () {
  if (basicCalculatorRadio.checked) {
    engineeringCalculatorDisplay.classList.add("hidden");
  }
});
