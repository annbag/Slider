$.getJSON('https://annbag.github.io/Slider/data/data.json', function (data) {
    console.log(data);
    const list = document.createElement('ul');
    data.forEach(image => {
        const item = document.createElement('li');
        const photo = document.createElement('img');
        list.appendChild(item);
        item.appendChild(photo);
        photo.src = `${image.imageUrl}`;
    });

    document.getElementById('images').appendChild(list);

    main();
});
