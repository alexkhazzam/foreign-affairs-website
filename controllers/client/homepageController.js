const fetchIp = require('../../models/client/fetchIpModel');

exports.getHomepage = (req, res, next) => {
  const ip = new fetchIp.fetchIpModel(true);
  ip.getInfo().then((data) => {
    const i = data.ipAddress;
    if (parseInt(i.split('.')[0]) === 69) {
      res.render('client/homepage', {
        showIcons: 5,
      });
    } else {
      res.render('client/homepage', {
        showIcons: 5,
      });
    }
  });
};

exports.getSettings = (req, res, next) => {
  res.render('client/settings', {});
  console.log('hi');
};
