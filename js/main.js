const headerForm = document.querySelector('.header__search-form');
const headerInput = document.querySelector('.header__search-input');

headerInput.addEventListener('focus', () => {
  headerForm.style.boxShadow = '0 0 3px 2px var(--color-primary)';
});

headerInput.addEventListener('blur', () => {
  headerForm.style.boxShadow = 'none';
})
