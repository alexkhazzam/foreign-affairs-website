const nodemailer = require('nodemailer');

exports.contactModel = class HandleForm {
  constructor(email, firstname, lastname, message) {
    this.email = email;
    this.firstname = firstname;
    this.lastname = lastname;
    this.message = message;
  }
  async wrappedSendMail(mailOptions) {
    const promise = new Promise((resolve, reject) => {
      let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: 'nhsforeignaffairs@gmail.com',
          pass: 'foreignaffairs232',
        },
      });
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          reject(false);
        } else {
          console.log(info);
          resolve(true);
        }
      });
    });
    return promise;
  }
  async sendEmail() {
    let mailOptions = {
      from: `${this.firstname} ${this.lastname}`,
      to: 'nhsforeignaffairs@gmail.com',
      subject: `${this.email} sent an email from the website!`,
      text: `Code: ${this.message} | User: ${this.firstname}${this.lastname}`,
    };
    let response = await this.wrappedSendMail(mailOptions);
    console.log(response, 'sdGFHWOGWEGWE');
    return response;
  }
  async sendGenerateCode() {
    let mailOptions = {
      from: 'nhsforeignaffairs@gmail.com',
      to: this.email,
      subject: 'Attendance Code Generated!',
      text:
        'Enter this code to mark your attendance for all meetings to follow',
    };
    let response = await this.wrappedSendMail(mailOptions);
    return response;
  }
};
