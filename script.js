const screen = document.getElementById("screen");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let operator = "";
let firstValue = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (!isNaN(value) || value === ".") {
      if (screen.value === "0") {
        screen.value = value;
      } else {
        screen.value += value;
      }
    }

    else if (["+", "−", "×", "÷"].includes(value)) {
      firstValue = screen.value;
      operator = value;
      screen.value = "";
    }

    else if (value === "=") {
      const secondValue = screen.value;
      let result = 0;

      switch (operator) {
        case "+":
          result = Number(firstValue) + Number(secondValue);
          break;
        case "−":
          result = Number(firstValue) - Number(secondValue);
          break;
        case "×":
          result = Number(firstValue) * Number(secondValue);
          break;
        case "÷":
          result = Number(firstValue) / Number(secondValue);
          break;
      }

      screen.value = result;
    }

    else if (value === "AC") {
      screen.value = "0";
      firstValue = "";
      operator = "";
    }

    else if (value === "CE") {
      screen.value = screen.value.slice(0, -1) || "0";
    }

    else if (value === "%") {
      screen.value = Number(screen.value) / 100;
    }
  });
});
