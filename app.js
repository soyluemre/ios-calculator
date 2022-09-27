const currentArea = document.getElementById("currentArea");
const previousArea = document.getElementById("previousArea");

document.getElementById("table").onclick = (e) => {
  if (e.target.className === "number") {
    writingCurrentArea(e.target.innerText);
  } else if (e.target.className === "operationButtons") {
    selectOperation(e.target.innerText);
  } else if (e.target.className === "selector") {
    deleteCurrentArea(e.target.innerText);
  } else if (e.target.id === "result") {
    result();
  }
};

const writingCurrentArea = (e) => {
  if (e === "." && currentArea.innerText.includes(".")) return;
  if (e === "-" && currentArea.innerText.includes("-")) return;
  currentArea.innerText += e;
};

const deleteCurrentArea = (e) => {
  if (e === "AC") {
    currentArea.innerText = "";
    previousArea.innerText = "";
  } else if (e === "DEL") {
    currentArea.innerText = currentArea.innerText.slice(0, -1);
  }
};
const selectOperation = (e) => {
  if (currentArea.innerText === "") return;
  if (previousArea.innerText !== "") {
    calculate();
  }
  previousArea.innerText = currentArea.innerText + e;
  currentArea.innerText = "";
};

const calculate = () => {
  const currentValue = parseFloat(currentArea.innerText);
  const previousValue = parseFloat(previousArea.innerText.slice(0, -1));
  console.log(previousArea.innerText.slice(0, -1));
  if (previousArea.innerText.charAt() === "-") {
  }
  let calcValue;
  if (previousArea.innerText.includes("+")) {
    calcValue = currentValue + previousValue;
    previousArea.innerText = "";
    currentArea.innerText = calcValue;
  } else if (previousArea.innerText.includes("-")) {
    if (previousValue > currentValue) {
      calcValue = -1 * (currentValue - previousValue);
    } else {
      calcValue = previousValue - currentValue;
    }

    previousArea.innerText = "";
    currentArea.innerText = calcValue;
  } else if (previousArea.innerText.includes("x")) {
    calcValue = currentValue * previousValue;
    previousArea.innerText = "";
    currentArea.innerText = calcValue;
  } else if (previousArea.innerText.includes("/")) {
    calcValue = previousValue / currentValue;
    previousArea.innerText = "";
    currentArea.innerText = calcValue;
  }
};

const result = () => {
  console.log(previousArea.innerText);
  if (currentArea.innerText == "" && previousArea.innerText !== "") {
    currentArea.innerText = previousArea.innerText.slice(0, -1);
    previousArea.innerText = "";
  } else {
    calculate();
  }
  console.log(currentArea.innerText);
};
