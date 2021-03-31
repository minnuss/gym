const header = document.querySelector('.header');
const hambBtn = document.querySelector('.header__menu');
const overlay = document.querySelector('.header__overlay');
const links = document.querySelectorAll('.header__nav--links__item');


hambBtn.addEventListener('click', () => {
    header.classList.toggle('open');
    hambBtn.classList.toggle('open');
    overlay.classList.toggle('open');
})

links.forEach(link => {
    link.addEventListener('click', () => {
        hambBtn.click();
    })
})

overlay.addEventListener('click', () => {
    hambBtn.click();
})