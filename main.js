let btn_menu = document.querySelector('.burger-menu');
let header_menu = document.querySelector('.header__nav');
let header_menu_item = document.querySelectorAll('.header-nav__link')
let btn__closed = document.querySelector('.closed_menu')

btn_menu.addEventListener('click', function() {
    header_menu.classList.add('header__nav--active');
    document.body.classList.add('overflow--hidden');
})

header_menu_item.forEach(element => element.addEventListener('click', function () {
    header_menu.classList.remove('header__nav--active');
    document.body.classList.remove('overflow--hidden');
}));

btn__closed.addEventListener('click', function() {
  header_menu.classList.remove('header__nav--active');
  document.body.classList.remove('overflow--hidden');

})
