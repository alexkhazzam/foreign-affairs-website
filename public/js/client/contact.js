const contactFormSpinner = document.querySelector(
  '.contact-form__spinner-wrapper'
);
const contactFormSubmit = document.querySelector('.contact-form__submit');
alert('hi');
contactFormSubmit.addEventListener('click', () => {
  contactFormSpinner.stlye.display = 'block';
});
