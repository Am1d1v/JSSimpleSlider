


const btn1 = document.querySelector('.slider__item-1');
const btn2 = document.querySelector('.slider__item-2');
const btn3 = document.querySelector('.slider__item-3');
const img = document.querySelector('img');

const btnLeft = document.querySelector('.slider__item-left');
const btnRight = document.querySelector('.slider__item-right');

// btn1.addEventListener('click', () => {
//     img.src = 'img/1.png'
// })

// btn2.addEventListener('click', () => {
//     img.src = 'img/2.png'
// })

// btn3.addEventListener('click', () => {
//     img.src = 'img/3.png'
// })


// Arrows Slider Way
/*
let imgIndex = 1;

    btnLeft.addEventListener('click', () => {

           imgIndex--;
           if(imgIndex < 1){
               imgIndex = 1;
           }

           img.src = `img/${imgIndex}.png`
        })
    
     btnRight.addEventListener('click', () => {

        imgIndex++;
        if(imgIndex > 3){
            imgIndex = 3;
        }

        img.src = `img/${imgIndex}.png`
     })
*/

// Timer Slider Way

let imgIndex = 1;
setInterval(() => {
    
    imgIndex++;

    if(imgIndex >= 4){
        imgIndex = 1;
    }
    
    img.src = `img/${imgIndex}.png`

}, 1200)




