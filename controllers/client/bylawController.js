const contactModel = require('../../models/client/contactModel');

exports.getBylawPage = (req, res, next) => {
  res.render('client/bylaws', {});
};

exports.getBylawDropbox = (req, res, next) => {
  res.render('client/bylaw-dropbox', {
    emailSent: req.query.emailStatus === 'success' ? true : false,
  });
};

exports.postBylawDropbox = (req, res, next) => {
  console.log(req.body.bylawUpload);
  const sendEmail = new contactModel.contactModel(
    req.body.email,
    req.body.firstName,
    req.body.lastName,
    req.body.message
  );
  sendEmail
    .sendEmail()
    .then((emailResponse) => {
      if (emailResponse) {
        res.redirect('/bylaw-dropbox/?emailStatus=success');
      }
    })
    .catch((err) => {
      if (err) {
        console.log(err);
        throw err;
      }
    });
};
