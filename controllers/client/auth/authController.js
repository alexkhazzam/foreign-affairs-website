const registerModel = require('../../../models/auth/registerModel');

let passErrMsg;
let emailErrMsg;

exports.getRegister = (req, res, next) => {
  res.render('client/auth/register', {
    emailErr: emailErrMsg,
    passErr: passErrMsg,
  });
};

exports.getLogin = (req, res, next) => {
  res.render('client/auth/login', {});
};

exports.postRegister = (req, res, next) => {
  const checkForm = new registerModel.checkForm(
    req.body.email,
    req.body.confirmEmail,
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
};

exports.postLogin = (req, res, next) => {};
