const header = document.querySelector('.header');
const hambBtn = document.querySelector('.header__menu');
const overlay = document.querySelector('.header__overlay');


hambBtn.addEventListener('click', () => {
    header.classList.toggle('open');
    hambBtn.classList.toggle('open');
    overlay.classList.toggle('open');
})