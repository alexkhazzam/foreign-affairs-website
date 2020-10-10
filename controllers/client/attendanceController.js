exports.getAttendancePage = (req, res, next) => {
  res.render('client/attendanceRecords/attendance', { blob: 1 });
};

exports.getAttendanceYear = (req, res, next) => {
  res.render(`client/attendanceRecords/years/${req.params.id.split(':')[1]}`, {
    blob: req.params.id.split(':')[1],
  });
};
