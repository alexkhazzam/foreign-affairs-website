exports.checkForm = class {
  constructor(email, username, password, confirmPassword) {
    this.email = email;
    this.username = username;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }

  checkStudentEmail() {
    this.emailBody = [];
    for (let i = 0; i <= this.email.length; i++) {
      this.emailBody.push(this.email.charAt(i));
    }

    let parsedString = this.email.slice(
      this.emailBody.indexOf('@') + 1,
      this.emailBody.length
    );
    if (
      //hi
      parsedString !== 'student.gn.k12.ny.us' ||
      this.email === 'aohebshalom2@student.gn.k12.ny.us' ||
      parsedString !== 'greatneck.k12.ny.us'
    ) {
      return {
        email: null,
      };
    } else {
      return {
        email: this.email,
      };
    }
  }

  credentialsMatch() {
    let passwordLength = 0;
    let equalSign = false;
    for (let i = 0; i <= this.password.length; i++) {
      passwordLength++;
      if (this.password.charAt(i) === '=') {
        equalSign = true;
      }
    }
    if (this.password !== this.confirmPassword) {
      return {
        subject: 'match',
      };
    } else if (equalSign) {
      return {
        subject: 'symbols',
      };
    } else if (passwordLength <= 6) {
      return {
        subject: '6',
      };
    } else if (passwordLength >= 30) {
      return {
        subject: '30',
      };
    } else if (!/\d/.test(this.password)) {
      return {
        subject: 'number',
      };
    } else {
      return {};
    }
  }
};
