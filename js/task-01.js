'use strict';


const categories =
document.getElementById('categories');

const items =categories.querySelectorAll('li.item');

const allCategories= items.length;
console.log(`Number of categories: ${allCategories}`);


const categoriesList= document.getElementById('categories');


const categoryItems =categoriesList.querySelectorAll('li.item');


categoryItems.forEach(function(item) {
  
  const headerText=item.querySelector('h2').textContent;


  const nestedItems=item.querySelectorAll('ul li');


  const numberOfNestedItems= nestedItems.length;

  
  console.log('Category: '+headerText);
  console.log('Number of items:'+ numberOfNestedItems);
});