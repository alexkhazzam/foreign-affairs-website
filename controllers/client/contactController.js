const contactModel = require('../../models/client/contactModel');

let emailSentMsg = false;

exports.getContactPage = (req, res, next) => {
  res.render('client/contact', {
    emailMsg: req.query.submitted === 'success' ? true : false,
  });
};

exports.postContactPage = (req, res, next) => {
  const handleForm = new contactModel.contactModel(
    req.body.email,
    req.body.firstName,
    req.body.lastName,
    req.body.message,
    'contact'
  );
  console.log(req.body.email);
  handleForm
    .sendEmail()
    .then((data) => {
      if (data) {
        emailSentMsg = true;
        res.redirect('/contact/?submitted=success');
      }
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
