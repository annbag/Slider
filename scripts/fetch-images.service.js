// Process: Downloading
function fetchImages(cb) {
    return fetch('https://annbag.github.io/Slider/data/data.json')
        .then((response) => {
            return response.json();
        });
}
