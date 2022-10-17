const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const totalValue = document.querySelector("#value");
// const counterValue = {
//     value: 0,
//     decrementFn() {
//         this.value -= 1
//     },
//     incrementFn() {
//         this.value += 1;
//     },
// }

// decrementBtn.addEventListener('click', function () {
//     counterValue.decrementFn();
//     totalValue.textContent = counterValue.value;
// })
// incrementBtn.addEventListener('click', function () {
//     counterValue.incrementFn();
//     totalValue.textContent = counterValue.value;
// })

let counterValue = 0;

const onDecrementBtnClick = function () {
  counterValue -= 1;
  totalValue.textContent = counterValue;
};
const onIncrementBtnClick = function () {
  counterValue += 1;
  totalValue.textContent = counterValue;
};

decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncrementBtnClick);
