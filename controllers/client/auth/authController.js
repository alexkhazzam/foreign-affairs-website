const registerModel = require('../../../models/auth/registerModel');
const confirmationEmail = require('../../../models/auth/confirmationEmail');

exports.getRegister = (req, res, next) => {
  const queryObj = [
    req.query.queryFirstName === 'fail' ? true : false,
    req.query.queryLastName === 'fail' ? true : false,
    req.query.queryFullName === 'fail' ? true : false,
  ];
  res.render('client/auth/register', {
    queryObj: queryObj,
    queryUrl: req.url === '/secure/register' ? true : false,
    accountCreated: req.query.accountCreated === 'success' ? true : false,
    emailSent: req.query.emailSent === 'success' ? true : false,
    // queryEmail: req.query.queryEmail === 'fail' ? true : false,
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
  console.log(req.body);
  let firstUserName;
  let invalidName = true;
  let lastUserName;
  let splitUser = req.body.createUsername.split(' ');
  if (splitUser.length !== 1) {
    const firstChar = req.body.email.charAt(0).toUpperCase();
    const lastName = req.body.email.substring(1).split('@')[0].toUpperCase();
    if (
      req.body.createUsername.split(' ')[0].charAt(0).toUpperCase() !==
      firstChar
    ) {
      firstUserName = null;
    }
    if (
      lastName.substring(0, lastName.length - 1).toUpperCase() !==
      req.body.createUsername.split(' ')[1].toUpperCase()
    ) {
      lastUserName = null;
    }
  } else if (splitUser.length === 1) {
    invalidName = null;
  }
  console.log(invalidName);
  console.log(splitUser);
  console.log(splitUser.length);
  const checkForm = new registerModel.checkForm(
    req.body.email,
    req.body.username,
    req.body.password,
    req.body.confirmPassword
  );
  errMsg = checkForm.credentialsMatch();
  let studentEmail = checkForm.checkStudentEmail();

  // if (studentEmail.email === null) {
  //   res.redirect('/secure/register/?queryEmail=fail');
  // }

  if (firstUserName === null) {
    res.redirect('/secure/register/?queryFirstName=fail');
  } else if (lastUserName === null) {
    res.redirect('/secure/register/?queryLastName=fail');
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
    res.redirect('/construction');
  }
};
