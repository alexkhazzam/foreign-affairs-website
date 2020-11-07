const superagent = require('superagent');

let movieData;
let searched;

exports.getEntertainmentPage = (req, res, next) => {
  res.render('client/entertainment/home', {
    movieActive: false,
    homeActive: true,
  });
};

exports.getMoviePage = (req, res, next) => {
  res.render('client/entertainment/movie', {
    movieActive: true,
    homeActive: false,
    movieFound: req.query.movieFound === 'success' ? movieData : null,
    searched: searched,
  });
};

exports.postMoviePage = (req, res, next) => {
  searched = req.body.movie;
  superagent
    .get(`https://www.omdbapi.com/?&t=${req.body.movie}&apikey=78628677`)
    .then((data) => {
      const parsedObj = JSON.parse(data.text);
      const movieObj = {
        title: parsedObj.Title,
        year: parsedObj.Year,
        rated: parsedObj.Rated,
        released: parsedObj.Released,
        runtime: parsedObj.Runtime,
        genre: parsedObj.Genre,
        director: parsedObj.Director,
        writer: parsedObj.Writer,
        actors: parsedObj.Actors,
        plot: parsedObj.Plot,
        language: parsedObj.Language,
        country: parsedObj.Country,
        awards: parsedObj.Awards,
        poster: parsedObj.Poster,
        ratings: parsedObj.Ratings,
        metascore: parsedObj.Metascore,
        imdbRating: parsedObj.imdbRating,
        type: parsedObj.Type,
        boxOffice: parsedObj.BoxOffice,
        production: parsedObj.Production,
      };
      movieData = movieObj;
      res.redirect('/entertainment/movie-searcher/?movieFound=success');
    });
};
