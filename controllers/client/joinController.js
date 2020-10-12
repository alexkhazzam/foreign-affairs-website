let location;

exports.getJoinPage = (req, res, next) => {
  res.render('client/join', {
    location:
      req.query.locationSearched === true
        ? false
        : 'Great Neck North High School',
  });
};

exports.postJoinPage = (req, res, next) => {
  location = req.body.searchedLocation;
  res.redirect('/join/?locationSearched=true');
};
