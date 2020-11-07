const Express = require('express');
const Router = Express.Router();

const homepageController = require('../../controllers/client/homepageController');
const contactController = require('../../controllers/client/contactController');
const staffController = require('../../controllers/client/staffController');
const attendanceController = require('../../controllers/client/attendanceController');
const helpController = require('../../controllers/client/helpController');
const memberController = require('../../controllers/client/MemberController');
const bylawController = require('../../controllers/client/bylawController');
const joinController = require('../../controllers/client/joinController');
const websiteController = require('../../controllers/client/websiteController');
const privateHomeController = require('../../controllers/private/homepageController');
const constructionController = require('../../controllers/client/constructionController');
const entertainmentController = require('../../controllers/client/entertainmentController');

Router.get('/entertainment', entertainmentController.getEntertainmentPage);
Router.get(
  '/entertainment/movie-searcher',
  entertainmentController.getMoviePage
);
Router.get('/home', homepageController.getHomepage);
Router.get('/contact', contactController.getContactPage);
Router.get('/staff', staffController.getStaffPage);
Router.get('/attendance', attendanceController.getAttendancePage);
Router.get('/attendance/:yearId', attendanceController.getAttendanceYear);
Router.get('/help', helpController.getHelpPage);
Router.get('/members/:member', memberController.getMemberPage);
Router.get('/bylaws', bylawController.getBylawPage);
Router.get('/join', joinController.getJoinPage);
Router.get('/bylaw-dropbox', bylawController.getBylawDropbox);
Router.get('/this-website', websiteController.getThisWebsite);
Router.get('/attendance-submission', attendanceController.getSubmissionPage);
Router.get(
  '/attendance-submission/generate-code',
  attendanceController.getGenerateCode
);
Router.get('/member-information', memberController.getMemberInformationPage);
Router.get('/private-home', privateHomeController.getHomepage);
Router.get('/settings', homepageController.getSettings);
Router.get('/construction', constructionController.getConstructionPage);

Router.post('/contact', contactController.postContactPage);
Router.post('/help', helpController.postHelpPage);
Router.post('/join', joinController.postJoinPage);
Router.post('/bylaw-dropbox', bylawController.postBylawDropbox);
Router.post('/attendance-submission', attendanceController.postSubmissionPage);
Router.post(
  '/attendance-submission/generate-code',
  attendanceController.postGenerateCode
);
Router.post('/member-information', memberController.postMemberInformationPage);
Router.post(
  '/entertainment/movie-searcher',
  entertainmentController.postMoviePage
);

module.exports = Router;
