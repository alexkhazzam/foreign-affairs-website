const nodemailer = require('nodemailer');

exports.contactModel = class HandleForm {
  constructor(email, firstname, lastname, message, purpose, ipInfo = null) {
    this.email = email;
    this.firstname = firstname;
    this.lastname = lastname;
    this.message = message;
    this.purpose = purpose;
    this.ipInfo = ipInfo;
    this.curses = false;
  }
  filterCurse() {
    if (this.email === null) {
      return;
    } else {
      const words = [...this.message.split(' ')];
      const curseWords = [
        'fuck',
        'bitch',
        'ass',
        'dick',
        'sucker',
        'cock',
        'pussy',
        'fatass',
        'nigger',
        'spic',
        'shit',
        'shreds',
      ];
      curseWords.forEach((word) => {
        words.forEach((wrd) => {
          if (word === wrd) {
            this.curses = true;
          }
        });
      });
    }
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
          pass: 'foreignaffairs22',
        },
      });
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          reject(false);
        } else {
          resolve(true);
        }
      });
    });
    return promise;
  }
  async sendEmail() {
    let mailOptions;
    if (this.purpose === 'attendance') {
      this.filterCurse();
      if (this.curses) {
        mailOptions = {
          from: `null`,
          to: 'nhsforeignaffairs@gmail.com',
          subject: `Email Not Shown`,
          text: `This email is not shown because it contained innapropriate language.`,
        };
      } else {
        mailOptions = {
          from: `${this.firstname} ${this.lastname}`,
          to: 'nhsforeignaffairs@gmail.com',
          subject: `${this.firstname} ${this.lastname} submitted their attendance code!`,
          text: `Code: ${this.message}. Respond? You can reach them at ${this.email}.`,
        };
      }
    } else if (this.purpose === 'contact') {
      this.filterCurse();

      if (this.curses) {
        mailOptions = {
          from: `null`,
          to: 'nhsforeignaffairs@gmail.com',
          subject: `Email Not Shown`,
          text: `This email is not shown because it contained innapropriate language.`,
        };
      } else {
        mailOptions = {
          from: `${this.email}`,
          to: 'nhsforeignaffairs@gmail.com',
          subject: `${this.email} sent an email from the website!`,
          text: `${this.firstname} ${this.lastname} wrote: ${this.message}.`,
        };
      }
    } else if (this.purpose === 'website-pinged') {
      if (this.curses) {
        mailOptions = {
          from: `null`,
          to: 'nhsforeignaffairs@gmail.com',
          subject: `Email Not Shown`,
          text: `This email is not shown because it contained innapropriate language.`,
        };
      } else {
        mailOptions = {
          from: 'nhsforeignaffairs@gmail.com',
          to: 'nhsforeignaffairs@gmail.com',
          subject: 'Website Pinged',
          text: `
          Someone checked out our website at the following location:

          ${this.ipInfo}
          `,
        };
      }
    } else if (this.purpose === 'entertainment') {
      this.filterCurse();
      if (this.curses) {
        mailOptions = {
          from: `null`,
          to: 'nhsforeignaffairs@gmail.com',
          subject: `Email Not Shown`,
          text: `This email is not shown because it contained innapropriate language.`,
        };
      } else {
        mailOptions = {
          from: this.email,
          to: 'nhsforeignaffairs@gmail.com',
          subject: 'Entertainment Page Suggestion',
          text: this.email,
        };
      }
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
