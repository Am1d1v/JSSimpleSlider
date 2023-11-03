


const btn1 = document.querySelector('.slider__item-1');
const btn2 = document.querySelector('.slider__item-2');
const btn3 = document.querySelector('.slider__item-3');
const img = document.querySelector('img');

btn1.addEventListener('click', () => {
    img.src = 'img/1.png'
})

btn2.addEventListener('click', () => {
    img.src = 'img/2.png'
})

btn3.addEventListener('click', () => {
    img.src = 'img/3.png'
})