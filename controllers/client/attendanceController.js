const twentyNineteen = require('../../models/client/attendanceModels/2019Model');

exports.getAttendancePage = (req, res, next) => {
  const meeting1 = twentyNineteen.TwentyNineteen.getAttendance(0);
  console.log(meeting1);
  res.send('hi');
};

exports.getAttendanceYear = (req, res, next) => {};
