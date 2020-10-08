exports.checkForm = class {
  constructor(email, password, confirmPassword) {
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }

  checkStudentEmail() {
    const emailBody = [];
    for (let i = 0; i <= this.email.length; i++) {
      emailBody.push(this.email.charAt(i));
    }

    let parsedString = this.email.slice(
      emailBody.indexOf('@') + 1,
      emailBody.length
    );
    if (parsedString !== 'student.gn.k12.ny.us') {
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
    if (this.password !== this.confirmPassword) {
      return {
        errMsg: 'Passwords must match.',
        subject: 'password',
      };
    }
    if (!/\d/.test(this.password)) {
      return {
        errMsg: 'Password must include a number.',
        subject: 'password',
      };
    }
    if (!/[a-z]/.test(this.password)) {
      return {
        errMsg: 'Password must include a capital letter.',
        subject: 'password',
      };
    }
    return {};
  }
};
