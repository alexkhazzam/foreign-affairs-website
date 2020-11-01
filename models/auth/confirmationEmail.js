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
      html: `
      <html>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
      </head>
        <div style="background-image: linear-gradient(
          to bottom right,
          rgba(12, 206, 206, 0.85),
          rgba(133, 10, 204, 0.85)
        ); padding: 20px; height: fit-content">
          <div style="margin: auto; text-align: center">
          <img src="https://img.icons8.com/android/50/000000/year-of-goat.png"/>
          </div>
          <h1 style="color: white; text-align: center; letter-spacing: 3px; font-family: 'Montserrat', sans-serif;">
            The Foreign Affairs Club
          </h1>
          <h3 style="color: white; text-align: center; width: 80%; margin: auto">You are recieving this notication because someone used your email to create an account on our website. If it was not you, then ignore this email; otherwise, follow the steps below to finish creating your account!</h3>
          <ul style="text-align: center; background-color: rgb(243, 243, 243); border: 2px solid white; width: fit-content; margin: auto; padding: 20px; box-shadow: 1px 1px 5px rgba(32, 32, 32, 0.87); margin-top: 30px">
            <li style="list-style: none; text-align: left; color: black">
              1) Open <a href="nhsforeignaffairs.org/construction">This Link</a> in your local browser
            </li>
            <li style="list-style: none; text-align: left; color: black">
              2) <a href="#">Log In</a> with your newly-created account
            </li>
            <li style="list-style: none; text-align: left; color: black">
              3) Experience the thrill of a live chat group with your fellow students at North High!
            </li>
          </ul>
        </div>
      </html>
      `,
    };
    let response = await this.wrappedSendMail(mailOptions);
    return response;
  }
};
