const form = document.querySelector('.register__content--form');
const progressNumber = document.querySelectorAll('.register__progress--step span');
const progressCheck = document.querySelectorAll('.register__progress--step i');
const progressStep = document.querySelectorAll('.register__progress--step');

const nextBtns = document.querySelectorAll('.next');
const prevBtns = document.querySelectorAll('.prev');
const submitBtn = document.querySelector('.submit');

let count = 0;
let remValue = 0;

// NEXT BUTTON EVENTS
function slideNext() {
    // rem value is width of element --field in 11-register.scss
    remValue += 28;
    form.style.transform = `translateX(-${remValue}rem)`;
    progressNumber[count].classList.add('active');
    progressCheck[count].classList.add('active');
    progressStep[count].style.backgroundColor = 'var(--color-quinary)';
    count++
};

nextBtns.forEach(next => {
    next.addEventListener('click', () => {
        slideNext();
    })
})

// PREVIOUS BUTTON EVENTS
function slidePrev() {
    remValue -= 28;
    count--;
    form.style.transform = `translateX(-${remValue}rem)`;
    progressNumber[count].classList.remove('active');
    progressCheck[count].classList.remove('active');
    progressStep[count].style.backgroundColor = 'var(--color-tertiary-m)';
};

prevBtns.forEach(next => {
    next.addEventListener('click', () => {
        slidePrev();
    })
})

// SUBMIT BUTTON
submitBtn.addEventListener('click', () => {
    progressNumber[count].classList.add('active');
    progressCheck[count].classList.add('active');
    progressStep[count].style.backgroundColor = 'var(--color-quinary)';
    setTimeout(() => {
        alert('You Form Has Been Successfully Submitted, Thank You.');
        // reload page in same webpage location
        location.reload();
    }, 1000);
});

