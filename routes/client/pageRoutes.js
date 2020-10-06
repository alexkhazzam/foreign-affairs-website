const Express = require('express');
const Router = Express.Router();

const homepageController = require('../../controllers/client/homepageController');

Router.get('/home', homepageController.getHomepage);

module.exports = Router;
