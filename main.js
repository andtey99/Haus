const burger_btn = document.querySelector('#toggle');
const nav = document.querySelector('.burger_nav');

burger_btn.addEventListener('change', function() {
    if (burger_btn.checked) {
        nav.style.marginTop = '40px';
    }
    else {
        nav.style.marginTop = '-200%';
    }
});