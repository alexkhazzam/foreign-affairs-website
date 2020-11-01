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
};
