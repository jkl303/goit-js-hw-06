function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
let boxSize = 20;
let amount = 0;
const boxSet = new Set();
function onInput() {
  amount = Number(input.value);
  return amount;
}
function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    boxSize += 10;
    const createdBox = document.createElement('div');
    createdBox.style.width = boxSize + 'px';
    createdBox.style.height = boxSize + 'px';
    createdBox.style.backgroundColor = getRandomHexColor();
    boxSet.add(createdBox);
  }
  boxes.append(...boxSet);
};
function destroyAllBoxes() {
  boxes.innerHTML = '';
  boxSet.clear();
  boxSize = 20;
};
input.addEventListener('input', onInput);
createBtn.addEventListener('click', () => createBoxes(amount));
destroyBtn.addEventListener('click', destroyAllBoxes);