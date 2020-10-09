const Express = require('express');
const Router = Express.Router();

const homepageController = require('../../controllers/client/homepageController');
const contactController = require('../../controllers/client/contactController');
const staffController = require('../../controllers/client/staffController');

Router.get('/home', homepageController.getHomepage);
Router.get('/contact', contactController.getContactPage);
Router.post('/contact', contactController.postContactPage);
Router.get('/staff', staffController.getStaffPage);

module.exports = Router;
