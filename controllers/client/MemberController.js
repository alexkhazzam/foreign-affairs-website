exports.getMemberPage = (req, res, next) => {
  const name = req.params.member;
  console.log(name);
  res.render('client/member', {});
};
