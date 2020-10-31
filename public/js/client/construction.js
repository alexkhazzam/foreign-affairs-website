const comingSoon = document.querySelector('.coming-soon');

let i = 0;
let text = 'Dashboard and account under construction. Coming Soon!';

const printTxt = () => {
  setTimeout(() => {
    comingSoon.textContent += text.charAt(i);
    i++;
    printTxt();
  }, 45);
};

printTxt();
