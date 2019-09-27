// Process: Render
function renderImages(images) {

    images.forEach(image => {
        const sliderElement = document.createElement('li');
        sliderElement.classList.add('slider-element');
        const sliderImage = document.createElement('img');
        document.querySelector('.slider-elements').appendChild(sliderElement);
        sliderElement.appendChild(sliderImage);
        sliderImage.src = image.imageUrl;
    });
}
