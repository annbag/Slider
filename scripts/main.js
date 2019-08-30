const right = document.getElementById('right-arrow');
const left = document.getElementById('left-arrow');
const elements = document.getElementsByTagName('li');

let activeElement = 0;

function next() {
    console.log('next');

    activeElement++;

    elements[activeElement].classList.add('active');
    elements[activeElement - 1].classList.remove('active');

    if (activeElement === elements.length - 1) {
        elements[0].classList.add('active');
        elements[elements.length - 1].classList.remove('active');
        activeElement = 0;
    }
}

function prev() {
    console.log('prev');
}


right.addEventListener('click', next);
left.addEventListener('click', prev);
