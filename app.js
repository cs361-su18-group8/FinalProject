//init the required packages
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const mysql = require('./dbcon.js');

// init the view engine
app.engine('handlebars', exphbs({defaultLayout: 'main.handlebars.html'}));
app.set('view engine', 'hbs');

// serving the static pages
app.use(express.static('./public'));
app.set('mysql', mysql);

//serving the main page
app.get('/', function(req, res, next)  {
   res.status(200);
   res.render('helloWorld.handlebars');
});

app.use(function(req,res){
    res.status(404);
    res.render('404');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

//setting the port to the env variable or 3000 as default
var port = process.env.PORT || 3000;
app.listen(port);
