const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.value = "16";
const getInputValue = () => {
  textEl.style.fontSize = inputEl.valueAsNumber + "px";
};

inputEl.addEventListener("input", getInputValue);
