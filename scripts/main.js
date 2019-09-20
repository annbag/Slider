const right = document.getElementById('right-arrow');
const left = document.getElementById('left-arrow');
const elements = document.getElementsByTagName('li');
const dots = document.getElementsByClassName('dot');

const time = 3000;
let activeElement = 0;
let interval;


function main() {
    fetchImages((images) => {
        renderImages(images);
        interval = setInterval(changePhoto, time);

        right.addEventListener('click', next);
        left.addEventListener('click', prev);

        addDots();
        addActiveClassToFirstElement();
    })
}

function next() {
    activeElement++;

    if (activeElement === elements.length) {
        elements[0].classList.add('active');
        elements[elements.length - 1].classList.remove('active');

        dots[0].classList.add('active');
        dots[elements.length - 1].classList.remove('active');

        activeElement = 0;
    }

    elements[activeElement].classList.add('active');
    elements[activeElement - 1].classList.remove('active');

    dots[activeElement].classList.add('active');
    dots[activeElement - 1].classList.remove('active');

    clearInterval(interval);
}

function prev() {
    activeElement--;

    if (activeElement === -1) {
        activeElement = elements.length - 1;
        elements[0].classList.remove('active');
        elements[activeElement].classList.add('active');

        dots[0].classList.remove('active');
        dots[activeElement].classList.add('active');
    }

    elements[activeElement].classList.add('active');
    elements[activeElement + 1].classList.remove('active');

    dots[activeElement].classList.add('active');
    dots[activeElement + 1].classList.remove('active');

    clearInterval(interval);
}

function changePhoto() {
    activeElement++;

    if (activeElement === elements.length) {
        elements[0].classList.add('active');
        elements[elements.length - 1].classList.remove('active');

        dots[0].classList.add('active');
        dots[elements.length - 1].classList.remove('active');

        activeElement = 0;
    }

    elements[activeElement].classList.add('active');
    elements[activeElement - 1].classList.remove('active');

    dots[activeElement].classList.add('active');
    dots[activeElement - 1].classList.remove('active');

}

function addActiveClassToFirstElement() {
    const element = document.querySelector('li');
    element.classList.add('active');

    const dotsDiv = document.querySelector('div.dot');
    dotsDiv.classList.add('active');
}

function addDots() {
    const dots = document.getElementById('dots');
    const count = elements.length;

    for (let i = 0; i < count; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dots.appendChild(dot);
    }
}

window.addEventListener('DOMContentLoaded', main);





