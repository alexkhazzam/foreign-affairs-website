const Express = require('express');
const Router = Express.Router();

const authController = require('../../../controllers/client/auth/authController');

Router.get('/register', authController.getRegister);
Router.get('/login', authController.getLogin);
Router.post('/register', authController.postRegister);
Router.post('/login', authController.postLogin);

module.exports = Router;
