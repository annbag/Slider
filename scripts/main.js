const sliderButtonNext = document.querySelector('.right-arrow');
const sliderButtonPrev = document.querySelector('.left-arrow');
const sliderElements = document.getElementsByTagName('li');
const sliderDotsElement = document.getElementsByClassName('slider-dot-btn');

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

            // addDots();
            createDots()
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
    const firstPhoto = document.querySelector('.slider-element');
    firstPhoto.classList.add('active');

    const firstDot = document.querySelector('.slider-dot-btn');
    firstDot.classList.add('active');
}

function createDots() {
    const sliderDots = document.createElement('div');
    sliderDots.classList.add('slider-dots');
    for (let i = 0; i < sliderElements.length; i++) {

        const dotBtn = document.createElement('button');
        dotBtn.classList.add('slider-dot-btn');
        dotBtn.type = 'button';

        dotBtn.addEventListener('click', function() {
            changeSlide(i);
        });

        sliderDots.appendChild(dotBtn);
    }

    document.querySelector('.slider').appendChild(sliderDots);
}

function changeSlide(index) {
    for (let i = 0; i < sliderElements.length; i++) {
        sliderElements[i].classList.remove('active');
        sliderDotsElement[i].classList.remove('active');
        clearInterval(interval);
    }

    sliderElements[index].classList.add('active');
    sliderDotsElement[index].classList.add('active');

    activeElement = index;
}

window.addEventListener('DOMContentLoaded', main);
