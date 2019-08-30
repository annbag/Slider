$.getJSON('https://annbag.github.io/Slider/data.json', function (data) {
    console.log(data);
    let output = "<ul>";
    data.forEach(image => {
        output += "<li>";
        output += `<img src="${image.imageUrl}" >`;
        output += "</li>";
    });

    output += "</ul>";
    document.getElementById('images').innerHTML = output;
});
