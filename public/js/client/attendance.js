const attendanceHeader = document.querySelector('.attendance__header');
const showMeetings = document.querySelector('.show-meetings');
const hiddenMeetings = document.querySelector('.hidden-meetings');
const showLess = document.querySelector('.show-less');

let i = 0;
let text = 'Check out our attendance list!';

const printTxt = () => {
  setTimeout(() => {
    attendanceHeader.textContent += text.charAt(i);
    i++;
    printTxt();
  }, 45);
};

showMeetings.addEventListener('click', () => {
  hiddenMeetings.style.display = 'block';
  hiddenMeetings.scrollIntoView({ behavior: 'smooth' });
  showMeetings.style.display = 'none';
  showLess.style.display = 'block';
});

showLess.addEventListener('click', () => {
  hiddenMeetings.style.display = 'none';
  showMeetings.style.display = 'block';
  showLess.style.display = 'none';
});

printTxt();
