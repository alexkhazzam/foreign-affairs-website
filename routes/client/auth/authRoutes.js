const Express = require('express');
const Router = Express.Router();

const authController = require('../../../controllers/client/auth/authController');

Router.get('/secure/register', authController.getRegister);
Router.get('/secure/login', authController.getLogin);
Router.post('/secure/register', authController.postRegister);
Router.post('/secure/login', authController.postLogin);

module.exports = Router;
