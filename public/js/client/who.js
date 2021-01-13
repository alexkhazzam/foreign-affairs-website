const who = document.querySelector('.who-text');

let i = 0;
let text = 'Who are we?';

const printTxt = () => {
  setTimeout(() => {
    who.textContent += text.charAt(i);
    i++;
    printTxt();
  }, 45);
};

printTxt();
