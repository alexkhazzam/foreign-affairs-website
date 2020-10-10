const helpModel = require('../../models/client/helpModel');

let refs = null;

exports.getHelpPage = (req, res, next) => {
  res.render('client/help', {
    links: req.query.refsFound === 'success' ? refs : null,
  });
};

exports.postHelpPage = (req, res, next) => {
  const matchInputs = new helpModel.helpModel(req.body.searchValue);
  let obj = matchInputs.matchPossibleRefs();
  res.redirect(`/help/?refsFound=${obj.refs}`);
};
