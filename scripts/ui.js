// Process: Render
function renderImages(images) {
    const sliderSelector = document.querySelector('.slider');

    const sliderElements = document.createElement('ul');
    sliderElements.classList.add('slider-elements');
    sliderSelector.appendChild(sliderElements);

    images.forEach(image => {
        const sliderElement = document.createElement('li');
        sliderElement.classList.add('slider-element');
        const sliderImage = document.createElement('img');

        sliderElements.appendChild(sliderElement);
        sliderElement.appendChild(sliderImage);
        sliderImage.src = image.imageUrl;
    });

}
