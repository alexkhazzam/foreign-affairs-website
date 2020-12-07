const email = require('../../models/client/contactModel');
exports.getHomepage = (req, res, next) => {
  res.render('client/homepage', {});
  const Email = new email.contactModel(
    null,
    null,
    null,
    null,
    'website-pinged'
  );
  Email.sendEmail().then((data) => {
    console.log(data);
  });
};

exports.getSettings = (req, res, next) => {
  res.render('client/settings', {});
  console.log('hi');
};
// test
