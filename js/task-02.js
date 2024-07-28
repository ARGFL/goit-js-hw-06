
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById('ingredients');


const listItems = [];

ingredients.forEach(function(ingredient) {
  const listItem = document.createElement('li');
  
  listItem.textContent = ingredient;
  

  listItem.classList.add('item');
  
  
  listItems.push(listItem);
});

ingredientsList.append(...listItems);
