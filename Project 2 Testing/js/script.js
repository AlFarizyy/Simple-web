// toggle class active
const navbarNav = document.querySelector ('.navbar-nav');
// ketika Menu di klik
document.querySelector('#Menu').onclick = () => {
    navbarNav.classList.toggle('active');
};
// klik diluar sidebar
const menu = document.querySelector('#Menu');

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
    }
})