exports.getAttendancePage = (req, res, next) => {
  res.render('client/attendance/years/fall-2020', { currYear: 'Fall - 2020' });
};

exports.getAttendanceYear = (req, res, next) => {
  let currentYear = `${req.params.yearId.split('-')[0].split(':')[1]}-${
    req.params.yearId.split('-')[1]
  }`;
  res.render(`client/attendance/years/${currentYear}`, {
    currYear: `${currentYear
      .split('-')[0]
      .charAt(0)
      .toUpperCase()}${currentYear.split('-')[0].slice(1)} ${
      currentYear.split('-')[1]
    }`,
  });
};
