const helpModel = require('../../models/client/helpModel');

let refs = [];
let searchedVal;

exports.getHelpPage = (req, res, next) => {
  res.render('client/help', {
    links: refs,
    searchedVal: searchedVal,
  });
};

exports.postHelpPage = (req, res, next) => {
  searchedVal = req.body.searchValue;
  const matchInputs = new helpModel.helpModel(searchedVal);
  refs = [...matchInputs.matchPossibleRefs()];
  if (refs.length === 0) {
    res.redirect('/help/?links=fail');
  } else {
    res.redirect('/help/?links=success');
  }
};
