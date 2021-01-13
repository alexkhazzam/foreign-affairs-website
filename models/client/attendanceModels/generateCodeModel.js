const fs = require('fs');
const path = require('path');

exports.GenerateCode = class {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
  verifyEmail() {
    let resultObj = {};
    if (this.email.split('@')[1] !== 'student.gn.k12.ny.us') {
      return (resultObj = {
        success: false,
        emailStatus: false,
        emailUse: null,
        id: null,
      });
    } else {
      const codes = fs.readFileSync(
        path.join(__dirname, 'data', 'memberCodes.json'),
        'utf-8'
      );
      const parsedCodes = [...JSON.parse(codes)];
      parsedCodes.forEach((member) => {
        if (member.email === this.email) {
          return (resultObj = {
            success: false,
            emailStatus: null,
            emailUse: true,
            id: null,
          });
        } else {
          const code = this.makeId(6);
          const jsonObj = {
            email: this.email,
            member: `${this.firstName}-${this.lastName}`,
            id: code,
          };
          parsedCodes.push(jsonObj);
          fs.writeFile(
            path.join(__dirname, 'data', 'memberCodes.json'),
            JSON.stringify(parsedCodes),
            (err) => {
              if (err) {
                console.log(err);
                throw err;
              }
            }
          );
          resultObj = {
            emailStatus: true,
            emailUse: true,
            success: true,
            id: code,
          };
        }
      });
    }
    return resultObj;
  }
  makeId(length) {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
};
