const getCoords = () => {
  const promise = new Promise((resolve, reject) => {
    window.navigator.geolocation.getCurrentPosition(
      (succ) => {
        resolve(succ);
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};

const printCoords = () => {
  getCoords().then((coords) => {
    console.log(coords);
  });
};

printCoords();
