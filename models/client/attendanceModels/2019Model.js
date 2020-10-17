const fs = require('fs');
const path = require('path');

exports.TwentyNineteen = class {
  static getAttendance(meeting) {
    const meetingObj = fs.readFileSync(
      path.join(__dirname, 'data', 'meetings.json'),
      'utf-8'
    );
    const parsedJson = [...JSON.parse(meetingObj)];
    const people = [...parsedJson[meeting]].map((member) => {
      const memberStr = `${member.split('/')[1].split('-')[0]} ${
        member.split('/')[1].split('-')[1]
      }`;
      return memberStr;
    });
    return people;
  }
};
