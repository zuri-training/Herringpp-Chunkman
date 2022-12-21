const nav = document.querySelector('.navbar');
const navToggle = document.querySelector('.toggle-bar');

navToggle.addEventListener('click', () => {
    const visible = nav.getAttribute('data-visible')

    if (visible === 'false') {
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if (visible === 'true'){
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});