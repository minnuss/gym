const scrollTop = document.querySelector('.scroll-top');

// scrollTop.classList.remove('active');

window.addEventListener('scroll', () => {
    scrollTop.classList.toggle('active', window.scrollY > 800);
});

scrollTop.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome,
})