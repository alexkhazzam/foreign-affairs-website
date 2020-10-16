const Express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(Express.static(path.join(__dirname, 'public')));

const clientRoutes = require('./routes/client/pageRoutes');
const authRoutes = require('./routes/client/auth/authRoutes');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(clientRoutes);
app.use(authRoutes);

app.use('/', (req, res, next) => {
  res.render('client/homepage', {});
});

module.exports = app;
