const attendanceModel = require('../../models/client/attendanceModels/attendanceModel');
const studentCodeModel = require('../../models/client/attendanceModels/studentCodeModel');
const contactModel = require('../../models/client/contactModel');
const generateCodeModel = require('../../models/client/attendanceModels/generateCodeModel');

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

exports.getGenerateCode = (req, res, next) => {
  res.render('client/attendance/generateCode', {
    emailSent: req.query.generateCode === 'success' ? true : false,
    emailStatus: req.query.emailStatus === 'fail' ? false : true,
    emailUse: req.query.emailUse === 'fail' ? false : true,
  });
};

exports.postGenerateCode = (req, res, next) => {
  const generateCode = new generateCodeModel.GenerateCode(
    req.body.firstName,
    req.body.lastName,
    req.body.email
  );
  const result = generateCode.verifyEmail();
  if (!result.success && result.emailStatus === false) {
    res.redirect('/attendance-submission/generate-code/?emailStatus=fail');
  } else if (!result.success && result.emailUse === false) {
    res.redirect('/attendance-submission/generate-code/?emailUse=fail');
  }
  if (result.success) {
    const sendEmail = new contactModel.contactModel(
      req.body.email,
      req.body.firstName,
      null,
      result.id
    );
    sendEmail
      .sendGenerateCode()
      .then((data) => {
        if (data) {
          res.redirect(
            '/attendance-submission/generate-code/?generateCode=success/?emailStatus=success/?emailUse=true'
          );
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          throw err;
        }
      });
    console.log(result.success);
  }
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
  res.render('client/attendance/submission', {
    emailSent: req.query.submitted === 'success' ? true : false,
  });
};

exports.postSubmissionPage = (req, res, next) => {
  const attendanceId = req.body.attendanceId;
  const submitCode = studentCodeModel.SubmitCode.submitId(attendanceId);
  if (submitCode.result === true) {
    const sendEmail = new contactModel.contactModel(
      submitCode.email,
      submitCode.firstName,
      submitCode.lastName,
      submitCode.id,
      'attendance'
    );
    sendEmail.sendEmail().then((emailResponse) => {
      if (emailResponse) {
        res.redirect('/attendance-submission/?submitted=success');
      }
    });
  } else {
    res.redirect('/attendance-submission/?submitted=fail');
  }
};
