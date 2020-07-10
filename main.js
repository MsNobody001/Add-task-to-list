const input = document.querySelector('input');
const btn = document.querySelector('button');
const ul = document.querySelector('ul');
let taskNumber = document.querySelector('h1 span');

const addTask = (e) => {
    e.preventDefault();
    const inputValue = input.value;
    const item = document.createElement('li');
    item.textContent = inputValue;
    ul.appendChild(item);
    input.value = "";

    taskNumber.textContent = [...document.querySelectorAll('ul li')].length;

}

btn.addEventListener('click', addTask);