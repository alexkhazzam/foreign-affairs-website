const attendanceModel = require('../../models/client/attendanceModels/attendanceModel');

exports.getAttendancePage = (req, res, next) => {
  const attendance = attendanceModel.AttendanceModel.fetchAttendance(
    'fall-2020'
  );

  res.render('client/attendance/years/fall-2020', {
    currYear: 'Fall - 2020',
    attendanceArr: attendance,
  });
};

exports.getAttendanceYear = (req, res, next) => {
  let currentYear = `${req.params.yearId.split('-')[0].split(':')[1]}-${
    req.params.yearId.split('-')[1]
  }`;

  const attendance = attendanceModel.AttendanceModel.fetchAttendance(
    currentYear
  );

  res.render(`client/attendance/years/${currentYear}`, {
    currYear: `${currentYear
      .split('-')[0]
      .charAt(0)
      .toUpperCase()}${currentYear.split('-')[0].slice(1)} ${
      currentYear.split('-')[1]
    }`,
    attendanceArr: attendance,
  });
};
