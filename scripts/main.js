class Slider {
    constructor(elemSelector) {
        this.sliderSelector = elemSelector;
        this.sliderButtonNext = null;
        this.sliderButtonPrev = null;
        this.sliderElements = null;
        this.sliderDotsElement = null;

        this.activeElement = 0;
        this.time = 2000;
        this.slider = null;
        this.interval = null;

        this.generateSlider();
        this.main();
    }
}

Slider.prototype.generateSlider = function () {
    this.slider = document.querySelector(this.sliderSelector);

    this.sliderButtonNext = document.querySelector('.right-arrow');
    this.sliderButtonPrev = document.querySelector('.left-arrow');
    this.sliderElements = document.getElementsByTagName('li');

    this.sliderDotsElement = document.getElementsByClassName('slider-dot-btn');
};

Slider.prototype.main = function () {
    fetchImages()
        .then((images) => {
            renderImages(images);
            this.interval = setTimeout(function () {
                this.nextImage();
            }.bind(this), this.time);

            this.sliderButtonNext.addEventListener('click', () => {
                this.nextImage();
                clearInterval(this.interval);
            });
            this.sliderButtonPrev.addEventListener('click', () => {
                this.prevImage();
                clearInterval(this.interval);
            });

            this.createDots();
            this.addActiveClassToFirstElement();
        });
};

Slider.prototype.nextImage = function () {
    this.activeElement++;
    const isActiveElementOutOfElementCollection = (this.activeElement > this.sliderElements.length - 1);

    if (isActiveElementOutOfElementCollection) {
        this.activeElement = 0;
    }
    this.changeSlide(this.activeElement);
};

Slider.prototype.prevImage = function () {
    this.activeElement--;

    const isActiveElementBelowZero = (this.activeElement < 0);

    if (this.activeElement < isActiveElementBelowZero) {
        this.activeElement = this.sliderElements.length - 1;
    }

    this.changeSlide(this.activeElement);
};

Slider.prototype.addActiveClassToFirstElement = function () {
    const firstPhoto = document.querySelector('.slider-element');
    firstPhoto.classList.add('active');

    const firstDot = document.querySelector('.slider-dot-btn');
    firstDot.classList.add('active');
};

Slider.prototype.createDots = function () {
    const sliderDots = document.createElement('div');
    sliderDots.classList.add('slider-dots');

    for (let i = 0; i < this.sliderElements.length; i++) {
        const dotBtn = document.createElement('button');
        dotBtn.classList.add('slider-dot-btn');
        dotBtn.type = 'button';

        dotBtn.addEventListener('click', function () {
            this.changeSlide(i);
            clearInterval(this.interval);
        }.bind(this));

        sliderDots.appendChild(dotBtn);
    }

    document.querySelector('.slider').appendChild(sliderDots);
};

Slider.prototype.changeSlide = function (index) {
    for (let i = 0; i < this.sliderElements.length; i++) {
        this.sliderElements[i].classList.remove('active');
        this.sliderDotsElement[i].classList.remove('active');
        clearInterval(this.interval);
    }
    this.activeElement = index;

    this.sliderElements[this.activeElement].classList.add('active');
    this.sliderDotsElement[this.activeElement].classList.add('active');

    this.interval = setTimeout(function () {
        this.nextImage();
    }.bind(this), this.time);
};

const slide1 = new Slider('#slider1');

// window.addEventListener('DOMContentLoaded', Slider.prototype.main);
