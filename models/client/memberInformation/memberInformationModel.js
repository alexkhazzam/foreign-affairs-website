const path = require('path');
const fs = require('fs');

exports.MemberInformationModel = class {
  constructor(memberName) {
    this.memberName = memberName;
  }
  fetchMember() {
    const members = fs.readFileSync(
      path.join(__dirname, './data', 'members.json'),
      'utf-8'
    );
    const matchedMembers = [];
    const parsedMembers = [...JSON.parse(members)];
    parsedMembers.forEach((memberObj) => {
      if (
        `${
          memberObj.member.split('-')[0] + ' ' + memberObj.member.split('-')[1]
        }`
          .toUpperCase()
          .includes(this.memberName.toUpperCase()) ||
        this.memberName
          .toUpperCase()
          .includes(
            `${
              memberObj.member.split('-')[0] +
              ' ' +
              memberObj.member.split('-')[1]
            }`
          )
      ) {
        const informationObj = {
          member: memberObj.member,
          titles: memberObj.titles.length !== 0 ? memberObj.titles : null,
          hobbies: memberObj.hobbies.length !== 0 ? memberObj.hobbies : null,
          achievements:
            memberObj.achievements.length !== 0 ? memberObj.achievements : null,
          about: memberObj.about !== '' ? memberObj.about : null,
        };
        matchedMembers.push(informationObj);
      }
    });
    return matchedMembers;
  }

  fetchSingularMember() {
    const name = `${this.memberName.substring(1)}`;
    const members = fs.readFileSync(
      path.join(__dirname, './', 'data', 'members.json'),
      'utf-8'
    );
    const names = [...JSON.parse(members)].find(
      (member) => member.member.toUpperCase() === name.toUpperCase()
    );
    if (names === undefined) {
      return undefined;
    } else {
      const informationObj = {
        member: names.member,
        titles: names.titles.length !== 0 ? names.titles : null,
        hobbies: names.hobbies.length !== 0 ? names.hobbies : null,
        achievements:
          names.achievements.length !== 0 ? names.achievements : null,
        about: names.about !== '' ? names.about : null,
      };
      return informationObj;
    }
  }
};
