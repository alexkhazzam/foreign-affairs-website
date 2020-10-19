const registerModel = require('../../../models/auth/registerModel');
const confirmationEmail = require('../../../models/auth/confirmationEmail');

exports.getRegister = (req, res, next) => {
  res.render('client/auth/register', {
    accountCreated: req.query.accountCreated === 'success' ? true : false,
    emailSent: req.query.emailSent === 'success' ? true : false,
    queryEmail: req.query.queryEmail === 'fail' ? true : false,
    queryMaxLimit: req.query.queryMaxLimit === 'fail' ? true : false,
    querySymbol: req.query.querySymbol === 'fail' ? true : false,
    queryLength: req.query.queryLength === 'fail' ? true : false,
    queryMatch: req.query.queryMatch === 'fail' ? true : false,
    queryNumber: req.query.queryNumber === 'fail' ? true : false,
    queryCapital: req.query.queryCapital === 'fail' ? true : false,
  });
};

exports.getLogin = (req, res, next) => {
  res.render('client/auth/login', {
    login: req.query.login === 'fail' ? false : true,
  });
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

  if (studentEmail.email === null) {
    res.redirect('/secure/register/?queryEmail=fail');
  } else if (errMsg.subject === 'match') {
    res.redirect('/secure/register/?queryMatch=fail');
  } else if (errMsg.subject === '30') {
    res.redirect('/secure/register/?queryMaxLimit=fail');
  } else if (errMsg.subject === '6') {
    res.redirect('/secure/register/?queryLength=fail');
  } else if (errMsg.subject === 'symbols') {
    res.redirect('/secure/register/?querySymbol=fail');
  } else if (errMsg.subject === 'number') {
    res.redirect('/secure/register/?queryNumber=fail');
  } else if (errMsg.subject === 'capital') {
    res.redirect('/secure/register/?queryCapital=fail');
  } else {
    const sendConfEmail = new confirmationEmail.confirmationEmail(
      studentEmail.email
    );
    sendConfEmail
      .sendMail()
      .then((data) => {
        if (data) {
          removeLogIn = true;
          res.redirect(
            '/secure/register/?accountCreated=succcess&emailSent=success'
          );
        }
      })
      .catch((err) => {
        res.redirect('/secure/register/?accountCreated=fail&emailSent=fail');
      });
  }
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  if (email.split('@')[1] !== 'student.gn.k12.ny.us') {
    res.redirect('/secure/login/?login=fail');
  } else {
  }
};
