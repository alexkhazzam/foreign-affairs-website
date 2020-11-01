const memberInformationModel = require('../../models/client/memberInformation/memberInformationModel');

let memberList;

exports.getMemberPage = (req, res, next) => {
  const name = req.params.member;
  console.log(name);
  res.render('client/member', {});
};

exports.getMemberInformationPage = (req, res, next) => {
  res.render('client/memberInformation', {
    members: req.query.membersFound === 'success' ? memberList : false,
  });
};

exports.postMemberInformationPage = (req, res, next) => {
  const memberName = req.body.memberName;
  const memberInfo = new memberInformationModel.MemberInformationModel(
    memberName
  );
  const members = memberInfo.fetchMember();
  memberList = members;
  if (members.length !== 0) {
    res.redirect('/member-information/?membersFound=success');
  } else {
    res.redirect('/member-information/?membersFound=fail');
  }
};
