let location;

exports.getJoinPage = (req, res, next) => {
  res.render('client/join', {
    location:
      req.query.locationSearched === 'success' ? location : 'gn north high',
  });
};

exports.postJoinPage = (req, res, next) => {
  location = req.body.searchedLocation;
  res.redirect('/join/?locationSearched=success');
};
