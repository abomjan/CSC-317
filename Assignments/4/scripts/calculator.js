const display = document.getElementById("display");

const buttons = Array.from(document.querySelectorAll("button"));

buttons.forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    const buttonText = e.target.innerText;

    if (buttonText === "AC") {
      clearDisplay();
    } else if (buttonText === "=") {
      calculate();
    } else if (buttonText === "+/-") {
      toggleSign();
    } else if (buttonText === "X") {
      appendToDisplay("*");
    } else {
      appendToDisplay(buttonText);
    }
  });
});

const appendToDisplay = (input) => {
  display.value += input;
};

const clearDisplay = () => {
  display.value = "";
};

const toggleSign = () => {
  if (display.value) {
    if (display.value.startsWith("-")) {
      display.value = display.value.slice(1);
    } else {
      display.value = "-" + display.value;
    }
  }
};

const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
};

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (key >= "0" && key <= "9") {
    appendToDisplay(key);
  }

  switch (key) {
    case "+":
      appendToDisplay("+");
      break;
    case "-":
      appendToDisplay("-");
      break;
    case "*":
    case "x":
    case "X":
      appendToDisplay("*");
      break;
    case "/":
      appendToDisplay("/");
      event.preventDefault();
      break;
    case "%":
      appendToDisplay("%");
      break;
    case ".":
      appendToDisplay(".");
      break;
    case "Enter":
    case "=":
      calculate();
      event.preventDefault();
      break;
    case "Escape":
    case "c":
    case "C":
      clearDisplay();
      break;
    case "Backspace":
      display.value = display.value.slice(0, -1);
      event.preventDefault();
      break;
  }
});
