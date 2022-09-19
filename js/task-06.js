const input = document.querySelector("#validation-input");
const length = input.getAttribute('data-length');
const onBlur = () => {
    if (input.value.length === parseInt(length)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.add('invalid');
    };
};
input.addEventListener('blur', onBlur);