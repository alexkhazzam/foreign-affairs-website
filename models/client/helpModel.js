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
    this.matchedRefs = [];
    this.refs.forEach((ref) => {
      if (
        this.searchedValue.toUpperCase().includes(ref.toUpperCase()) ||
        ref.toUpperCase().includes(this.searchedValue.toUpperCase())
      ) {
        this.matchedRefs.push(ref);
      }
    });

    const words = [];
    const list = [];
    for (let i = 0; i < this.matchedRefs.length; i++) {
      console.log(
        this.matchedRefs[i].split(
          this.matchedRefs[i].indexOf([this.searchedValue.length])
        )
      );
    }

    return { matchedRefs: this.matchedRefs };
  }
};

// <% let currentChar %>
// <% let styleDiff %>
// <% for (let i = 0; i < matchingRefs.length; i++) { %>
//   <% for (let k = 0; k < matchingRefs[i].ref.length; k++) { %>
//     <% for (let j = 0; j < matchingRefs[i].chars.length; j++) { %>
//       <% if (matchingRefs[i].ref[k] === matchingRefs[i].chars[j]) { %>
//         <% currentChar = matchingRefs[i].ref[k] %>
//         <% styleDiff = true %>
//       <% } else { %>
//         <% currentChar = matchingRefs[i].ref[k] %>
//         <% styleDiff = false %>
//         <% } %>
//     <% } %>
//     <% if (styleDiff) { %>
//       <span style="background-color: aquamarine;"><%= currentChar %></span>
//     <% } else { %>
//       <span style="color: black;"><%= currentChar %></span>
//       <% } %>
//   <% } %>
// <% } %>
