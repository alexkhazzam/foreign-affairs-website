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

printTxt();

class HttpHandler {
  constructor(movie) {
    this.movieTitle = movie;
    this.movieObjects = [];
    this.jsonObj;
  }
  sendHttpRequest(method, url) {
    const promise = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url);

      xhr.responseType = 'json';

      xhr.onload = function () {
        resolve(xhr.response);
      };

      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          console.log(xhr.status);
          reject(new Error('Something went wrong!'));
        }
      };

      xhr.onerror = function () {
        console.log(xhr.response);
        reject(new Error('Failed to send request!'));
      };
      xhr.send();
    });
    return promise;
  }

  async fetchMovies() {
    const responseData = await this.sendHttpRequest(
      'GET',
      `https://www.omdbapi.com/?&t=harry potter&apikey=78628677`
    );
    const rd = responseData;
    this.title = rd.Title;

    this.jsonObj = {
      Year: rd.Year,
      Rated: rd.Rated,
      Released: rd.Released,
      Runtime: rd.Runtime,
      Actors: rd.Actors,
      Awards: rd.Awards,
      BoxOffice: rd.BoxOffice,
      Country: rd.Country,
      DVD: rd.DVD,
      Director: rd.Director,
      Genre: rd.Genre,
      Language: rd.Language,
      Metascore: rd.Metascore,
      plot: rd.Plot,
      production: rd.Production,
      Released: rd.Released,
      Runtime: rd.Runtime,
      Type: rd.Type,
      Writer: rd.Writer,
      Year: rd.Year,
      ImdbRating: rd.imdbRating,
      ImdbVotes: rd.imdbVotes,
    };
    console.log(this.jsonObj);
  }
}

const httpHandler = new HttpHandler('harrypotter');
httpHandler.fetchMovies();
