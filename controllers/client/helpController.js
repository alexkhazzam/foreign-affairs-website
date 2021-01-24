const helpModel = require('../../models/client/helpModel');

let refs = [];
let matchingRefs = [];
let searchedVal;

exports.getHelpPage = (req, res, next) => {
  res.render('client/help', {
    links: refs,
    searchedVal: searchedVal,
    matchingRefs: matchingRefs,
  });
};

exports.postHelpPage = (req, res, next) => {
  searchedVal = req.body.searchValue;
  const matchInputs = new helpModel.helpModel(searchedVal);
  const obj = matchInputs.matchPossibleRefs();
  refs = [...obj.matchedRefs];
  if (refs.length === 0) {
    res.redirect('/help/?links=fail');
  } else {
    res.redirect('/help/?links=success');
  }
};
