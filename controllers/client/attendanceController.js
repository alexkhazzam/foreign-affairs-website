const attendanceModel = require('../../models/client/attendanceModels/attendanceModel');
const studentCodeModel = require('../../models/client/attendanceModels/studentCodeModel');
const contactModel = require('../../models/client/contactModel');

let currLink;

exports.getAttendancePage = (req, res, next) => {
  const attendance = attendanceModel.AttendanceModel.fetchAttendance(
    'fall-2020'
  );

  currLink = req.params.yearId;

  res.render('client/attendance/years/fall-2020', {
    currYear: 'Fall - 2020',
    attendanceArr: attendance,
    meetingLength: attendance.length,
    refId: currLink,
  });
};

exports.getAttendanceYear = (req, res, next) => {
  let currentYear = `${req.params.yearId.split('-')[0].split(':')[1]}-${
    req.params.yearId.split('-')[1]
  }`;

  currLink = req.params.yearId;

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
    meetingLength: attendance.length,
    refId: currLink,
  });
};

exports.getSubmissionPage = (req, res, next) => {
  console.log('helo');
  res.render('client/attendance/submission', {
    emailSent: req.query.submitted === 'success' ? true : false,
  });
};

exports.postSubmissionPage = (req, res, next) => {
  const attendanceId = req.body.attendanceId;
  const submitCode = studentCodeModel.SubmitCode.submitId(attendanceId);
  if (submitCode.result === true) {
    const sendEmail = new contactModel.contactModel(
      'nhsforeignaffairs@gmail.com',
      submitCode.firstName,
      submitCode.lastName,
      submitCode.id
    );
    console.log('about to send email');
    sendEmail.sendEmail().then((emailResponse) => {
      console.log('sending email'); // this statement does not get printed
      if (emailResponse) {
        res.redirect('/attendance-submission/?submitted=success');
      }
    });
  } else {
    res.redirect('/attendance-submission/?submitted=fail');
  }
};
