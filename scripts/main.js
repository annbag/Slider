const right = document.getElementById('right-arrow');
const left = document.getElementById('left-arrow');
const elements = document.getElementsByTagName('li');

const time = 3000;
let activeElement = 0;
let interval;

function main() {
    interval = setInterval(changePhoto, time);

    right.addEventListener('click', next);
    left.addEventListener('click', prev);
}

function next() {
    activeElement++;

    if (activeElement === elements.length - 1) {
        elements[0].classList.add('active');
        elements[elements.length - 1].classList.remove('active');
        activeElement = 0;
    }

    elements[activeElement].classList.add('active');
    elements[activeElement - 1].classList.remove('active');

    clearInterval(interval);
}

function prev() {
    activeElement--;

    if (activeElement === -1) {
        activeElement = elements.length - 1;
    }

    elements[activeElement].classList.add('active');
    elements[activeElement + 1].classList.remove('active');

    clearInterval(interval);
}

function changePhoto() {
    activeElement++;

    if (activeElement === elements.length - 1) {
        elements[0].classList.add('active');
        elements[elements.length - 1].classList.remove('active');
        activeElement = 0;
    }

    elements[activeElement].classList.add('active');
    elements[activeElement - 1].classList.remove('active');
}

window.addEventListener('DOMContentLoaded', main);





