// Process: Downloading
function fetchImages(cb) {
    return fetch(CONFIG.imageUrl)
        .then((response) => {
            return response.json();
        });
}
