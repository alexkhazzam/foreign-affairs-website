const nodemailer = require('nodemailer');

exports.contactModel = class HandleForm {
  constructor(email, firstname, lastname, message, purpose) {
    this.email = email;
    this.firstname = firstname;
    this.lastname = lastname;
    this.message = message;
    this.purpose = purpose;
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
    let mailOptions;
    if (this.purpose === 'attendance') {
      mailOptions = {
        from: `${this.firstname} ${this.lastname}`,
        to: 'nhsforeignaffairs@gmail.com',
        subject: `${this.firstname} ${this.lastname} submitted their attendance code!`,
        text: `Code: ${this.message}. Respond? You can reach them at ${this.email}.`,
      };
    } else if (this.purpose === 'contact') {
      mailOptions = {
        from: `${this.email}`,
        to: 'nhsforeignaffairs@gmail.com',
        subject: `${this.email} sent an email from the website!`,
        text: `${this.firstname} ${this.lastname} wrote: ${this.message}.`,
      };
    }
    let response = await this.wrappedSendMail(mailOptions);
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
