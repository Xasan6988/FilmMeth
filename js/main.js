const headerForm = document.querySelector('.header__search-form');
const headerInput = document.querySelector('.header__search-input');
const navigation = document.querySelector('.js-navigation');
const burgerBtn = document.querySelector('.js-burger-btn');
const closeBtn = document.querySelector('.js-navigation-close')


// стили для строки поиска
headerInput.addEventListener('focus', () => {
  headerForm.style.boxShadow = '0 0 3px 2px var(--color-primary)';
});

headerInput.addEventListener('blur', () => {
  headerForm.style.boxShadow = 'none';
});


// стили для бургер-меню
burgerBtn.addEventListener('click', () => {
  navigation.style.right = '0';
});

closeBtn.addEventListener('click', () => {
  navigation.style.right = '';
});
