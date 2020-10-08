const nodemailer = require('nodemailer');

exports.confirmationEmail = class SendEmail {
  constructor(email) {
    this.email = email;
  }
  async wrappedSendMail(mailOptions) {
    return new Promise((resolve, reject) => {
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
          reject(false);
        } else {
          resolve(true);
        }
      });
      return Promise;
    });
  }
  async sendMail() {
    let mailOptions = {
      from: 'nhsforeignaffairs@gmail.com',
      to: this.email,
      subject: 'Email Confirmation',
      text:
        'click this link to confirm your email: www.possibleHashAndCrpyographyThatWillTakeForeverToDO.com',
    };
    let response = await this.wrappedSendMail(mailOptions);
    return response;
  }
};
