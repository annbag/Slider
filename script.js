$.getJSON('https://annbag.github.io/Slider/data.json', function (data) {
    let output = "<ul>";
    console.log(data);
    for (let i in data) {
        output += "<li>" + data[i].id + "</li>";
        output += "<li>" + data[i].title + "</li>";
        output += "<img src=" + data[i].imageUrl + ">";
    }
    output += "</ul>";
    document.getElementById('images').innerHTML = output;
});
