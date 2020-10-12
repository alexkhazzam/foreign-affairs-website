const staffHeader = document.querySelector('.homepage-opening-text');

let i = 0;
let text = 'Great Neck North High is Proud to Present...';

const printTxt = () => {
  if (i === 44) {
    const clubText = document.querySelector('.writeable-club-text');
    const mainBtns = document.querySelector('.main-buttons-wrapper');
    clubText.style.display = 'block';
    staffHeader.style.display = 'none';
    mainBtns.style.display = 'block';
  } else {
    setTimeout(() => {
      staffHeader.textContent += text.charAt(i);
      i++;
      printTxt();
    }, 45);
  }
};

printTxt();
