const checkBox = document.querySelector('input[name="theme"]');
const lightIcon = document.querySelector('.fa-sun');
const darkIcon = document.querySelector('.fa-moon');
// selecting whole html document
const htmlEl = document.documentElement;

checkBox.addEventListener('change', () => {
    // when checkbox is ACTIVE, add dark theme
    if (checkBox.checked) {
        smoothTrans();
        // adding dark theme
        htmlEl.setAttribute('data-theme', 'dark');
        // dark/light icon show switch
        lightIcon.style.display = 'block';
        darkIcon.style.display = 'none';
    } else {
        smoothTrans();
        // adding light theme
        htmlEl.setAttribute('data-theme', 'light');
        // dark/light icon show switch
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'block';
    }
});

// adding smooth transition when switching themes
const smoothTrans = () => {
    // transition is set in style.scss
    htmlEl.classList.add('transition');

    // remove class after 710ms, because in style.scss transition was set to 0.7s
    window.setTimeout(() => {
        htmlEl.classList.remove('transition');
    }, 710)
}





