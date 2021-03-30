const imgIndicator = document.querySelectorAll('.testimonials__content--indicator__img');
const slides = document.querySelectorAll('.testimonials__content--slider__slide');

// Adding active class to clicked image and slide text
imgIndicator.forEach(img => {
    img.addEventListener('click', () => {

        // getting the data-id attribute
        // console.log(img.getAttribute('data-id'));

        // calling removeClass function, for removing active class, before applying new one
        removeClass()

        if (!img.classList.contains('active')) {
            img.classList.add('active');
            slides[img.getAttribute('data-id')].classList.add('active');
        }
    })
});

// Removing active class from all elements
function removeClass() {
    for (let i = 0; i < imgIndicator.length; i++) {
        imgIndicator[i].classList.remove('active');
        slides[i].classList.remove('active');
    }
};
