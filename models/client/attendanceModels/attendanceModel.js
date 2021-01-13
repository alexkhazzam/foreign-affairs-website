const path = require('path');
const fs = require('fs');

exports.AttendanceModel = class {
  static fetchAttendance(year) {
    console.log(year);
    return JSON.parse(
      fs.readFileSync(`${__dirname}/data/${year}.json`, 'utf-8')
    );
  }
};
