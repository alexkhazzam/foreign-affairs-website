const email = require('../../models/client/contactModel');
const superagent = require('superagent');

exports.getHomepage = (req, res, next) => {
  let failedReq = false;
  superagent.get('https://api.ipify.org/?format=json').then((data) => {
    res.render('client/homepage', {
      ip: data.body.ip,
    });
    if (!data) {
      failedReq = true;
    }
  });
  if (failedReq) {
    res.render('client/homepage', {
      ip: '|',
    });
  }

  // const Email = new email.contactModel(
  //   null,
  //   null,
  //   null,
  //   null,
  //   'website-pinged'
  // );
  // Email.sendEmail().then((data) => {
  //   console.log(data);
  // });
};

exports.getSettings = (req, res, next) => {
  res.render('client/settings', {});
  console.log('hi');
};
