const getLocationBtn = document.querySelector('.get-location-btn');
const loadingSpinner = document.querySelector('.loading-spinner-wrapper');

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
      latP.textContent = lat;
      longP.textContent = long;
      loadingSpinner.style.display = 'none';
    })
    .catch((err) => {
      const latP = document.querySelector('.latitude');
      const longP = document.querySelector('.longitude');
      latP.style.display = 'inline-block';
      longP.style.display = 'inline-block';
      latP.textContent = lat;
      longP.textContent = long;
      loadingSpinner.style.display = 'none';
    });
}

getLocationBtn.addEventListener('click', () => {
  loadingSpinner.style.display = 'block';
  outputCoordinates();
});
