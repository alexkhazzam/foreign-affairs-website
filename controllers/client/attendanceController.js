exports.getAttendancePage = (req, res, next) => {
  res.render('client/attendance/currentYear', {});
};

exports.getAttendanceYear = (req, res, next) => {
  console.log(req.params.yearId);
  res.render(
    `client/attendance/years/${req.params.yearId.split('-')[0].split(':')[1]}-${
      req.params.yearId.split('-')[1]
    }`
  );
};
