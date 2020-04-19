var express = require('express');
var expressHandleBars = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();
var handlebars = expressHandleBars({
  defaultLayout: 'main'
});

app.engine('handlebars', handlebars);
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(require("path").join(__dirname, 'public')));

//static pages
var menu = require('./menu');
app.get('/', (req, res) => res.render('users', menu(req)));
app.get('/roles', (req, res) => res.render('roles', menu(req)));

//CRUD handlers
var user = require("./controllers/user");
app.get('/user/data', user.getData);
app.get('/user/roles', user.getRoles);
app.post('/user/data', user.addData);
app.put('/user/data/:userId', user.updateData);
app.delete('/user/data/:userId', user.removeData);

var role = require("./controllers/role");
app.get('/role/data', role.getData);
app.post('/role/data', role.addData);
app.put('/role/data/:roleId', role.updateData);
app.delete('/role/data/:roleId', role.removeData);

app.listen(3000);