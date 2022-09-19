const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ings = document.querySelector('#ingredients');
const ingsArray = ingredients.map(ingredient => {
  const ing = document.createElement('li');
  ing.textContent = ingredient;
  ing.classList.add('item');
  return ing;
});
ings.append(...ingsArray);