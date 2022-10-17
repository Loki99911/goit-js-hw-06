const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const parentElement = document.querySelector("#ingredients");

const elements = ingredients.map((element) => {
  const createdElement = document.createElement("li");
  createdElement.textContent = element;
  createdElement.classList.add("item");
  return createdElement;
});

parentElement.append(...elements);
