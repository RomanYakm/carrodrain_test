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

// Dropdown start

const dropdownList = document.querySelectorAll('.dropdown');

dropdownList.forEach(dropdown => {
  dropdown.addEventListener('click', () => {
    const trigger = dropdown.querySelector('.dropdown__trigger');
    const content = dropdown.querySelector('.dropdown__content');

    trigger.classList.toggle('dropdown__trigger__active');
    content.classList.toggle('dropdown__content__active');
  })
})


// Dropdown end