const email = require('../../models/client/contactModel');
const superagent = require('superagent');

exports.getHomepage = (req, res, next) => {
  superagent
    .get('https://api.ipify.org/?format=json')
    .then((data) => {
      superagent
        .get(
          `http://api.ipstack.com/${data.body.ip}?access_key=${process.env.STACKKEY}`
        )
        .then((ipInf) => {
          const Email = new email.contactModel(
            null,
            null,
            null,
            null,
            'website-pinged',
            JSON.stringify(ipInf.body)
          );
          Email.sendEmail().then((data) => {
            console.log(data);
          });
        })
        .catch((err) => {
          console.log(err);
          throw err;
        });
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
  res.render('client/homepage', {});
};

exports.getSettings = (req, res, next) => {
  res.render('client/settings', {});
  console.log('hi');
};
