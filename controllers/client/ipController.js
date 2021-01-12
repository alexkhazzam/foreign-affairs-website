const superagent = require('superagent');

exports.fetchIp = class Ip {
  constructor() {}
  fetchIp() {
    superagent.get('https://api.ipify.org/?format=json').then((data) => {
      console.log(data.body.ip);
    });
  }
};
