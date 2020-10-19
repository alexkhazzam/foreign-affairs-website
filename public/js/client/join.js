const getLocationBtn = document.querySelector('.get-location-btn');
const loadingSpinner = document.querySelector('.loading-spinner-wrapper');
const classCodeBtn = document.querySelector('.copy-class-code');
const joinTitle = document.querySelector('.join__title');

let lat;
let long;

function getCoordinates() {
  const promise = new Promise((resolve, reject) => {
    window.navigator.geolocation.getCurrentPosition(
      ((succ) => {
        lat = err.coords.latitude;
        long = err.coords.longitude;
        resolve(succ);
      },
      (err) => {
        lat = err.coords.latitude;
        long = err.coords.longitude;
        reject(err);
      })
    );
  });
  return promise;
}

function outputCoordinates() {
  getCoordinates()
    .then((coords) => {
      const latP = document.querySelector('.latitude');
      const longP = document.querySelector('.longitude');
      latP.style.display = 'inline-block';
      longP.style.display = 'inline-block';
      latP.textContent = `Latitude: ${lat}`;
      longP.textContent = `Longitude: ${long}`;
      loadingSpinner.style.display = 'none';
    })
    .catch((err) => {
      const latP = document.querySelector('.latitude');
      const longP = document.querySelector('.longitude');
      latP.style.display = 'inline-block';
      longP.style.display = 'inline-block';
      latP.textContent = `Latitude: ${lat}`;
      longP.textContent = `Longitude: ${long}`;
      loadingSpinner.style.display = 'none';
    });
}

getLocationBtn.addEventListener('click', () => {
  loadingSpinner.style.display = 'block';
  outputCoordinates();
});

classCodeBtn.addEventListener('click', () => {
  navigator.clipboard.readText().then((clipText) => {
    clipText = 'hi';
    console.log(clipText);
  });
});

let i = 0;
let text =
  'Stay up to date with the latest scoop on world policies by joining our Google Classroom!';

const printTxt = () => {
  setTimeout(() => {
    joinTitle.textContent += text.charAt(i);
    i++;
    printTxt();
  }, 40);
};

printTxt();
