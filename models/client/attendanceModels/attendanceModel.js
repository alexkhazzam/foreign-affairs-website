const path = require('path');
const fs = require('fs');

exports.AttendanceModel = class {
  static fetchAttendance(year) {
    return JSON.parse(
      fs.readFileSync(path.join(__dirname, 'data', `${year}.json`), 'utf-8')
    );
  }
};
