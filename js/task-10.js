function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEl = document.querySelector("#controls").firstElementChild;
const addBtnEl = document.querySelector("[data-create]");
const dellBtnEl = document.querySelector("[data-destroy]");
const blockEl = document.querySelector("#boxes");

function eventFn() {
  const amount = Number(inputEl.value);
  createBoxes(amount);
}
addBtnEl.addEventListener("click", eventFn);

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = 30 + 10 * i + "px";
    box.style.height = 30 + 10 * i + "px";
    box.style.backgroundColor = getRandomHexColor();
    // console.log(box);
    blockEl.append(box);
    addBtnEl.removeEventListener("click", eventFn);
  }
}

dellBtnEl.addEventListener("click", () => {
  blockEl.innerHTML = "";
  addBtnEl.addEventListener("click", eventFn);
});
