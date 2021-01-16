const fs = require('fs');
const path = require('path');

exports.helpModel = class {
  constructor(searchedValue) {
    this.searchedValue = searchedValue;
  }

  matchPossibleRefs() {
    const members = fs.readFileSync(
      path.join(__dirname, './', 'memberInformation', 'data', 'members.json'),
      'utf-8'
    );

    const parsedMemberNames = [...JSON.parse(members)].map(
      (member) =>
        `#${member.member.split('-')[0] + ' ' + member.member.split('-')[1]}`
    );

    this.preMadeRefs = [
      'Contact',
      'Staff',
      'Register',
      'Login',
      'Join',
      'Attendance',
      'Who',
      'Bylaws',
      'Entertainment',
    ];
    this.refs = this.preMadeRefs.concat(parsedMemberNames);
    console.log(this.refs);
    this.matchedRefs = [];
    this.refs.forEach((ref) => {
      if (
        this.searchedValue.toUpperCase().includes(ref.toUpperCase()) ||
        ref.toUpperCase().includes(this.searchedValue.toUpperCase())
      ) {
        this.matchedRefs.push(ref);
      }
    });
    const chars = [];
    for (let i = 0; i <= this.searchedValue.length; i++) {
      this.matchedRefs.forEach((ref) => {
        for (let k = 0; k <= ref.length; k++) {
          if (this.searchedValue.split('')[i] === ref.charAt(k)) {
            chars.push(ref.charAt(k));
          }
        }
      });
    }
    return { matchedRefs: this.matchedRefs, chars: chars };
  }
};
