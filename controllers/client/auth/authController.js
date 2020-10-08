const registerModel = require('../../../models/auth/registerModel');
const confirmationEmail = require('../../../models/auth/confirmationEmail');

let passErrMsg;
let emailErrMsg;
let emailSentMsg;
let removeLogIn = false;

exports.getRegister = (req, res, next) => {
  res.render('client/auth/register', {
    emailErr: emailErrMsg,
    passErr: passErrMsg,
    emailSent: emailSentMsg,
    removeLogin: removeLogIn,
    loadingSpinner: registerModel.checkForm,
  });
};

exports.getLogin = (req, res, next) => {
  res.render('client/auth/login', {});
};

exports.postRegister = (req, res, next) => {
  const checkForm = new registerModel.checkForm(
    req.body.email,
    req.body.password,
    req.body.confirmPassword
  );
  errMsg = checkForm.credentialsMatch();
  let studentEmail = checkForm.checkStudentEmail();
  console.log(studentEmail.email);
  if (errMsg === {}) {
    console.log('registered');
  } else if (errMsg.subject === 'email') {
    emailErrMsg = errMsg.errMsg;
    passErrMsg = '';
    res.redirect('/register');
  } else if (errMsg.subject === 'password') {
    passErrMsg = errMsg.errMsg;
    emailErrMsg = '';
    res.redirect('/register');
  } else if (studentEmail.email === null) {
    console.log(studentEmail.email);
    passErrMsg = '';
    emailErrMsg = 'Email must end in "student.gn.k12.ny.us"';
    res.redirect('/register');
  }
  const sendConfEmail = new confirmationEmail.confirmationEmail(
    studentEmail.email
  );
  sendConfEmail
    .sendMail()
    .then((data) => {
      if (data) {
        emailSentMsg =
          'A confirmation link has been sent to your email. Click on it to activate your account!';
        removeLogIn = true;
        res.redirect('/register');
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postLogin = (req, res, next) => {};
