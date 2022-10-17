const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

const onFormInput = (event) => {
  if (event.currentTarget.value === "") {
    return (nameEl.textContent = "Anonymous");
  }
  nameEl.textContent = event.currentTarget.value;
};

inputEl.addEventListener("input", onFormInput);

// const onFormInput = () => {
//     if (inputEl.value === "") {
//         return nameEl.textContent = 'Anonymous'
//     }
//     nameEl.textContent = inputEl.value;
// };

// inputEl.addEventListener("input", onFormInput);
