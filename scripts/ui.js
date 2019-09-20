// Process: Render
function renderImages(images) {
    const list = document.createElement('ul');

    images.forEach(image => {
        const item = document.createElement('li');
        const photo = document.createElement('img');
        list.appendChild(item);
        item.appendChild(photo);
        photo.src = image.imageUrl;
    });

    document.getElementById('images').appendChild(list);
}
