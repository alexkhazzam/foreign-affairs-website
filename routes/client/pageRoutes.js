const Express = require('express');
const Router = Express.Router();

const homepageController = require('../../controllers/client/homepageController');
const contactController = require('../../controllers/client/contactController');
const staffController = require('../../controllers/client/staffController');
const attendanceController = require('../../controllers/client/attendanceController');
const helpController = require('../../controllers/client/helpController');
const memberController = require('../../controllers/client/MemberController');

Router.get('/home', homepageController.getHomepage);
Router.get('/contact', contactController.getContactPage);
Router.get('/staff', staffController.getStaffPage);
Router.get('/attendance', attendanceController.getAttendancePage);
Router.get('/attendance/meeting/:id', attendanceController.getAttendanceYear);
Router.get('/help', helpController.getHelpPage);
Router.get('/members/:member', memberController.getMemberPage);

Router.post('/contact', contactController.postContactPage);
Router.post('/help', helpController.postHelpPage);

module.exports = Router;
