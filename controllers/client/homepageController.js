exports.getHomepage = (req, res, next) => {
  res.render('client/homepage', {});
};

exports.getSettings = (req, res, next) => {
  res.render('client/settings', {});
};
