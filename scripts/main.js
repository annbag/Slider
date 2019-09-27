const sliderButtonNext = document.querySelector('.right-arrow');
const sliderButtonPrev = document.querySelector('.left-arrow');
const sliderElements = document.getElementsByTagName('li');
const sliderDotsElement = document.getElementsByClassName('dot');

const time = 3000;
let activeElement = 0;
let interval;

function main() {
    fetchImages()
        .then((images) => {
            renderImages(images);
            interval = setInterval(nextImage, time);

            sliderButtonNext.addEventListener('click', () => {
                nextImage();
                clearInterval(interval);
            });
            sliderButtonPrev.addEventListener('click', () => {
                prevImage();
                clearInterval(interval);
            });

            addDots();
            addActiveClassToFirstElement();
        });
}

function nextImage() {
    activeElement++;

    const isActiveElementOutOfElementCollection = (activeElement === sliderElements.length);
    const numberPhotos = sliderElements.length - 1;

    if (isActiveElementOutOfElementCollection) {
        sliderElements[0].classList.add('active');
        sliderElements[numberPhotos].classList.remove('active');

        sliderDotsElement[0].classList.add('active');
        sliderDotsElement[numberPhotos].classList.remove('active');

        activeElement = 0;
    } else {
        sliderElements[activeElement].classList.add('active');
        sliderElements[activeElement - 1].classList.remove('active');

        sliderDotsElement[activeElement].classList.add('active');
        sliderDotsElement[activeElement - 1].classList.remove('active');
    }
}

function prevImage() {
    activeElement--;

    const isActiveElementBelowZero = (activeElement === -1);

    if (isActiveElementBelowZero) {
        activeElement = sliderElements.length - 1;
        sliderElements[0].classList.remove('active');

        sliderDotsElement[0].classList.remove('active');
    } else {
        sliderElements[activeElement].classList.add('active');
        sliderElements[activeElement + 1].classList.remove('active');

        sliderDotsElement[activeElement].classList.add('active');
        sliderDotsElement[activeElement + 1].classList.remove('active');
    }
}

function addActiveClassToFirstElement() {
    const firstPhoto = document.querySelector('li');
    firstPhoto.classList.add('active');

    const firstDot = document.querySelector('.dot');
    firstDot.classList.add('active');
}

function addDots() {

    for (let i = 0; i < sliderElements.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        document.querySelector('.slider-dots').appendChild(dot);
    }
}

window.addEventListener('DOMContentLoaded', main);
