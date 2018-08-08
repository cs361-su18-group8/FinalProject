//init the required packages
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const mysql = require('./dbcon.js');

// init the view engine
app.engine('hbs', exphbs({defaultLayout: 'main.hbs'}));
app.set('view engine', 'hbs');

// serving the static pages
app.use(express.static('./public'));
app.set('mysql', mysql);

//serving the main page
app.get('/', function(req, res, next)  {
   res.status(200);
   // res.render('helloWorld.handlebars');

// get username
   var userName = 'Stan';
   // get name of webpage
   var pageName = 'My Complete Healthcare';
   // get today's date
   var dd = new Date();
   var year = dd.getFullYear();
   var month = dd.getMonth() + 1;
   var day = dd.getDate();
   var curDate = year + '/' + month + '/' + day;
   // fill in template and render
   function fillHomePage(){
       var homeVar ={};
       homeVar.userName = userName;
       homeVar.pageName = pageName;
       homeVar.date = curDate;
       return homeVar;
   }
   res.render('homePage', fillHomePage());
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


/**************************************************************
 *  alternate listening port
 *   *************************************************************/
//app.set('port', 4856);
//app.listen(app.get('port'), function(){
//    console.log('Express started http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
//});
