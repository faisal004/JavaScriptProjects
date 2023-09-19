function addToDisplay(value) {
  const displayElement = document.getElementById("display");
  const currentDisplay = displayElement.innerText;

  if (currentDisplay === "0") {
    displayElement.innerText = value;
  } else {
    displayElement.innerText += value;
  }
}

function clearDisplay() {
  const displayElement = document.getElementById("display");
  displayElement.innerText = "0";
}

function calculate() {
  const displayElement = document.getElementById("display");
  const expression = displayElement.innerText;

  try {
    const result = eval(expression);
    displayElement.innerText = result;
  } catch (error) {
    displayElement.innerText = "Error";
  }
}
