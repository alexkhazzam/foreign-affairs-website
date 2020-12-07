const { hasData } = require('jquery');
const memberModel = require('../../models/client/staffModel/staff');

exports.getStaffPage = (req, res, next) => {
  res.render('client/staff', {
    members: memberModel.GetMembers.fetchMembers(),
  });
};
