const nodemailer = require('nodemailer');

exports.contactModel = class HandleForm {
  constructor(email, firstname, lastname, message) {
    this.email = email;
    this.firstname = firstname;
    this.lastname = lastname;
    this.message = message;
  }
  async wrappedSendMail(mailOptions) {
    console.log('in wrapped send mail');
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
        //this is where my code breaks -- i put a console.log() statement here and nothing works
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
    console.log('in send email');
    let response = await this.wrappedSendMail(mailOptions);
    console.log(response, 'sdGFHWOGWEGWE');
    return response;
  }
};
