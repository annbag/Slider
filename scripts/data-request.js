// Process: Downloading
function fetchImages(cb) {
    return $.getJSON('https://annbag.github.io/Slider/data/data.json', cb);
}
