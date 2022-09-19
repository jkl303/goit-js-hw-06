let counterValue = 0;
const counter = document.querySelector('#value');
const decrBtn = document.querySelector('[data-action="decrement"]');
decrBtn.addEventListener('click', () => counter.textContent = counterValue -= 1)
const incrBtn = document.querySelector('[data-action="increment"]');
incrBtn.addEventListener('click', () => counter.textContent = counterValue += 1)