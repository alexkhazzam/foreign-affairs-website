const contactModel = require('../../models/client/contactModel');

let emailSentMsg = false;

exports.getContactPage = (req, res, next) => {
  res.render('client/contact', { emailMsg: emailSentMsg });
};

exports.postContactPage = (req, res, next) => {
  const handleForm = new contactModel.contactModel(
    req.body.email,
    req.body.firstName,
    req.body.lastName,
    req.body.message
  );
  handleForm
    .sendEmail()
    .then((data) => {
      if (data) {
        emailSentMsg = true;
        res.redirect('/contact');
      }
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};