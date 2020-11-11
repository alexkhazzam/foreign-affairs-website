const superagent = require('superagent');
var unirest = require('unirest');

let movieData;
let searched;
let countryData;
let countryCovidData;
let covidSearched;

exports.getEntertainmentPage = (req, res, next) => {
  res.render('client/entertainment/home', {});
};

exports.getMoviePage = (req, res, next) => {
  res.render('client/entertainment/movie', {
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

exports.getCountryPage = (req, res, next) => {
  res.render('client/entertainment/countries', {
    countryFound: req.query.countryFound === 'success' ? countryData : null,
    searched: req.body.country,
    searchedCountry: req.query.countryFound,
  });
};
exports.postCountryPage = (req, res, next) => {
  searchedCountry = req.body.country;

  var request = unirest(
    'GET',
    'https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all'
  );

  request.headers({
    'x-rapidapi-key': '5cdb349f57msh8bb01b1b9916332p117422jsn5892b9abe38d',
    'x-rapidapi-host': 'ajayakv-rest-countries-v1.p.rapidapi.com',
    useQueryString: true,
  });

  let countryCount = 0;

  request.end(function (response) {
    if (response.error) throw new Error(response.error);
    response.body.forEach((item) => {
      if (item.name.toUpperCase() === req.body.country.toUpperCase()) {
        countryCount++;
        const countryObj = {
          name: item.name,
          capital: item.capital,
          altSpellings: item.altSpellings,
          region: item.region,
          subregion: item.subregion,
          population: item.population,
          latlng: item.latlng,
          demonym: item.demonym,
          area: item.area,
          gini: item.gini,
          timezones: item.timezones,
          borders: item.borders,
          nativeName: item.nativeName,
          numericCode: item.numericCode,
          currencies: item.currencies,
          languages: item.languages,
        };
        countryData = countryObj;
        return res.redirect('/entertainment/countries/?countryFound=success');
      }
    });
    if (countryCount === 0) {
      res.redirect('/entertainment/countries/?countryFound=error');
    }
  });
};

exports.getCovidPage = (req, res, next) => {
  res.render('client/entertainment/covid', {
    countryFound:
      req.query.countryFound === 'success' ? countryCovidData : null,
    searched: covidSearched,
    searchedCountry: req.query.countryFound,
  });
};

exports.postCovidPage = (req, res, next) => {
  let countryCount = 0;
  covidSearched = req.body.country;
  superagent.get('https://api.covid19api.com/summary').then((data) => {
    const parsedData = JSON.parse(data.text);
    const countries = parsedData.Countries;
    countries.forEach((country) => {
      console.log(country);
      if (country.Country.toUpperCase() === req.body.country.toUpperCase()) {
        countryCount++;
        const countryObj = {
          Country: country.Country,
          CountryCode: country.CountryCode,
          Slug: country.Slug,
          NewConfirmed: country.NewConfirmed,
          TotalConfirmed: country.TotalConfirmed,
          NewDeaths: country.NewDeaths,
          TotalDeaths: country.TotalDeaths,
          NewRecovered: country.NewRecovered,
          TotalRecovered: country.TotalRecovered,
          RecentlyUpdated: country.Date,
        };
        countryCovidData = countryObj;
        res.redirect('/entertainment/covid/?countryFound=success');
      }
    });
    if (countryCount === 0) {
      res.redirect('/entertainment/covid/?countryFound=error');
    }
  });
};
