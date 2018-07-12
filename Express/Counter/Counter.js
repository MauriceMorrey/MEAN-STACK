var express = require("express");

var app = express();

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// require body-parser
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));

var session = require('express-session');
// use it!
app.use(session({
  secret: 'couldbeanything',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.get('/', function (request, response){
    if('count' in request.session){
      request.session.count++;
    }else {
      request.session.count = 1;
    }
    return response.render('Index', { session: request.session});
  })
  
  app.get('/doubleTrouble', function (request, response){
    request.session.count +=1;
    return response.redirect('/');
  })

  app.get('/reset', function (request, response){
    request.session.count = 0;
    return response.redirect('/');
  })

app.listen(8000, function () {
    console.log("listening on port 8000");
})


