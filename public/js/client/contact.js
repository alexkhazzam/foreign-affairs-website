const pTag = document.querySelector('.contact-form__writeable-text');
const contactFormLabel = document.querySelectorAll('.contact-form__label');
const emailInput = document.querySelector('.email-input');
const submitBtn = document.querySelector('.contact-form__submit');

let i = 0;
let text = 'Have questions? Contact us!';

const printTxt = () => {
  setTimeout(() => {
    pTag.textContent += text.charAt(i);
    i++;
    printTxt();
  }, 45);
};

submitBtn.addEventListener('click', () => {
  let inputFilled = 0;
  contactFormLabel.forEach((input) => {
    if (input.textContent === '') {
      inputFilled++;
    }
  });
  if (
    inputFilled === 3 &&
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      emailInput.textContent
    ) === true
  ) {
    console.log('hi');
  }
});
printTxt();
