const superagent = require('superagent');
const email = require('./contactModel');
exports.fetchIpModel = class {
  constructor(email = false) {
    this.email = email;
    this.STACKKEY = process.env.STACKKEY || null;
    this.PORT = process.env.PORT || 5000;
  }

  async getIp() {
    const promise = new Promise((resolve, reject) => {
      superagent.get('https://api.ipify.org/?format=json').then((data) => {
        if (data) {
          resolve(data.body.ip);
        } else {
          if (!data) {
            reject(data);
          }
        }
      });
    });
    return promise;
  }
  async ipInfo(ip) {
    const promise = new Promise((resolve, reject) => {
      superagent
        .get(
        // yes, i know i have a key displayed on a public repo, feel free to take it 
          `http://api.ipstack.com/${ip}?access_key=${'5bce7537594b52d327777315eece71e9'}`
        )
        .then((data) => {
          if (data) {
            resolve(data);
          } else {
            reject(data);
          }
        });
    });
    return promise;
  }

  async getInfo() {
    const ip = await this.getIp();
    const loc = await this.ipInfo(ip);
    process.env.IP = ip;
    if (this.email) {
      if (this.email) {
        const Email = new email.contactModel(
          null,
          null,
          null,
          null,
          'website-pinged',
          JSON.stringify(loc.body)
        );
        Email.sendEmail()
          .then((data) => {
            if (data) {
              console.log(data);
            }
          })
          .catch((err) => {
            if (err) {
              throw err;
            }
          });
      }
      return {
        ipAddress: ip ? ip : null,
        locationInformation: loc.body ? loc.body : null,
      };
    }
  }
};
