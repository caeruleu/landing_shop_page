let arrows = document.querySelectorAll('.arrow');
let sliderPics = document.querySelectorAll('.sliderPic');

arrows.forEach(arrow => {
    arrow.addEventListener('click', () => slidePic(arrow.id));
});

sliderPics.forEach(pic => {
    pic.addEventListener('click', (e) => {
        switchBig(+document.querySelector('.big').id, e.target.id);
    });
});

function slidePic (direction) {
    let now = +document.querySelector('.big').id;
    let next;
    if (direction == 'rightArrow') {
        now < sliderPics.length - 1? next = now + 1 : next = 0;
    } else {
        now !== 0 ? next = now - 1 : next = sliderPics.length - 1;
    }
    switchBig(now, next);
}

function switchBig (now, next) {
    sliderPics[now].classList.remove('big');
    sliderPics[next].classList.add('big');
}