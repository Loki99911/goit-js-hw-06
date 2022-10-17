const categoriesList = document.querySelector("#categories");
// console.log(categoriesList);
const categoriesEl = categoriesList.children;
console.log(`Number of categories: ${categoriesEl.length}`);

// const firstCategoryName = categoriesList.children[0].children[0].textContent;
// console.log(`Category: ${firstCategoryName}`);
// const firstCategoryNumber = categoriesList.children[0].children[1].children.length;
// console.log(`Elements: ${firstCategoryNumber}`);

for (let i = 0; i < categoriesEl.length; i += 1) {
  const firstCategoryName = categoriesList.children[i].children[0].textContent;
  console.log(`Category: ${firstCategoryName}`);
  const firstCategoryNumber =
    categoriesList.children[i].children[1].children.length;
  console.log(`Elements: ${firstCategoryNumber}`);
}
