// Slider code start

let slideCoutner = 1;

const buttonPrev = document.querySelector('.carousel__button__prev');
const buttonNext = document.querySelector('.carousel__button__next');
let activeImg = document.querySelector('.carousel__active__img');

buttonPrev.addEventListener('click', () => {
  if (slideCoutner === 1) {
    slideCoutner = 5;
  } else {
    slideCoutner--;
  }

  activeImg.src = `./img/carousel/${slideCoutner}.png`
});

buttonNext.addEventListener('click', () => {
  if (slideCoutner === 5) {
    slideCoutner = 1;
  } else {
    slideCoutner++;
  }

  activeImg.src = `./img/carousel/${slideCoutner}.png`
})

// Slider End
