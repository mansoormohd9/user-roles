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


app.listen(3000);