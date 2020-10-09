const registerModel = require('../../../models/auth/registerModel');
const confirmationEmail = require('../../../models/auth/confirmationEmail');

exports.getRegister = (req, res, next) => {
  console.log(req.query);
  res.render('client/auth/register', {
    queryPassword: req.query.passwordStatuss ? true : false,
    emailStatus: req.query.emailStatus ? true : false,
    queryRegister: req.query.registered ? true : false,
  });
};

exports.getLogin = (req, res, next) => {
  res.render('client/auth/login', {});
};

exports.postRegister = (req, res, next) => {
  const checkForm = new registerModel.checkForm(
    req.body.email,
    req.body.username,
    req.body.password,
    req.body.confirmPassword
  );
  errMsg = checkForm.credentialsMatch();
  let studentEmail = checkForm.checkStudentEmail();
  console.log(studentEmail.email);
  if (errMsg.subject === 'password') {
    res.redirect('/register/?passwordStatus=false');
  } else if (studentEmail.email === null) {
    console.log(studentEmail.email);
    res.redirect('/register/?emailStatus=false');
  }
  const sendConfEmail = new confirmationEmail.confirmationEmail(
    studentEmail.email
  );
  sendConfEmail
    .sendMail()
    .then((data) => {
      if (data) {
        removeLogIn = true;
        res.redirect('/register/?registered=true/?emailStatus=true');
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postLogin = (req, res, next) => {};
