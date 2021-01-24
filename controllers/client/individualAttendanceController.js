const fullAttendanceModel = require('../../models/client/fullAttendanceModel');
const FullAttendanceModel = new fullAttendanceModel.fullAttendanceModel();

let allMembers = [];
let searched = false;
let memSearched;

exports.getIndividualAttendancePage = (req, res, next) => {
  if (!searched) {
    res.render('client/individualAttendance', {
      membersFound: false,
      total: FullAttendanceModel.returnAtt().allIndividualMembers,
    });
  } else {
    res.render('client/individualAttendance', {
      membersFound: true,
      fall2019: FullAttendanceModel.returnAtt().fall2019Attendance,
      spring2020: FullAttendanceModel.returnAtt().spring2020Attendance,
      fall2020: FullAttendanceModel.returnAtt().fall2020Attendance,
      members: allMembers,
      searched: memSearched,
      total: FullAttendanceModel.returnAtt().allIndividualMembers,
    });
    allMembers = [];
  }
  // if (!req.query.searched) {
  //   res.render('client/individualAttendance', {
  //     membersFound: false,
  //   });
  // } else {
  //   res.render('client/individualAttendance', {
  //     fall2019: FullAttendanceModel.returnAtt().fall2019Attendance,
  //     spring2020: FullAttendanceModel.returnAtt().spring2020Attendance,
  //     fall2020: FullAttendanceModel.returnAtt().fall2020Attendance,
  //     members: [],
  //     membersFound: false,
  //   });
  // }
};

exports.postAttendanceSearch = (req, res, next) => {
  const member = req.body.member;
  FullAttendanceModel.returnAtt().allIndividualMembers.forEach((m) => {
    if (
      m.toUpperCase() === member.toUpperCase() ||
      m.toUpperCase().includes(member.toUpperCase()) ||
      member.toUpperCase().includes(m.toUpperCase())
    ) {
      allMembers.push(m);
    }
  });
  searched = true;
  memSearched = req.body.member;
  res.redirect('/individual-attendance/?searched=true');
};
