const right = document.getElementById('right-arrow');
const left = document.getElementById('left-arrow');
const elements = document.getElementsByTagName('li');
const dots = document.getElementsByClassName('dot');

const time = 3000;
let activeElement = 0;
let interval;


function main() {
    fetchImages()
        .then((images) => {
            renderImages(images);
            interval = setInterval(nextImage, time);

            right.addEventListener('click', () => {
                nextImage();
                clearInterval(interval);
            });
            left.addEventListener('click', () => {
                prevImage();
                clearInterval(interval);
            });

            addDots();
            addActiveClassToFirstElement();
        });
}

function nextImage() {
    activeElement++;

    const isActiveElementOutOfElementCollection = (activeElement === elements.length);
    const numberPhotos = elements.length - 1;

    if (isActiveElementOutOfElementCollection) {
        elements[0].classList.add('active');
        elements[numberPhotos].classList.remove('active');

        dots[0].classList.add('active');
        dots[numberPhotos].classList.remove('active');

        activeElement = 0;
    } else {
        elements[activeElement].classList.add('active');
        elements[activeElement - 1].classList.remove('active');

        dots[activeElement].classList.add('active');
        dots[activeElement - 1].classList.remove('active');
    }
}

function prevImage() {
    activeElement--;

    const isActiveElementBelowZero = (activeElement === -1);

    if (isActiveElementBelowZero) {
        activeElement = elements.length - 1;
        elements[0].classList.remove('active');

        dots[0].classList.remove('active');
    } else {
        elements[activeElement].classList.add('active');
        elements[activeElement + 1].classList.remove('active');

        dots[activeElement].classList.add('active');
        dots[activeElement + 1].classList.remove('active');
    }
}

function addActiveClassToFirstElement() {
    const firstPhoto = document.querySelector('li');
    firstPhoto.classList.add('active');

    const firstDot = document.querySelector('.dot');
    firstDot.classList.add('active');
}

function addDots() {
    const dots = document.getElementById('dots');

    for (let i = 0; i < elements.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dots.appendChild(dot);
    }
}

window.addEventListener('DOMContentLoaded', main);





