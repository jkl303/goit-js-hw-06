function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
let boxSize = 20;
const boxSet = new Set();
let amount = 0;
const onInput = () => {
  amount = Number(input.value);
  return amount;
}
const createBoxes = () => {
  for (let i = 0; i < amount; i += 1) {
    boxSize += 10;
    const createdBox = document.createElement('div');
    createdBox.style.width = boxSize + 'px';
    createdBox.style.height = boxSize + 'px';
    createdBox.style.backgroundColor = getRandomHexColor();
    boxSet.add(createdBox);
    boxes.append(...boxSet);
  }
};
const destroyAllBoxes = () => {
  boxes.innerHTML = '';
  boxSet.clear();
  boxSize = 20;
};
input.addEventListener('input', onInput);
createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyAllBoxes);