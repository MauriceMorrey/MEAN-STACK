var express = require("express");

var app = express();

app.use(express.static(__dirname + "/static"));

app.get('/', function (request, response) {
})

app.get('/cars.html', function (request, response) {
})

app.get('/cats.html', function (request, response) {
})

app.get('/form.html', function (request, response) {
})

app.listen(8000, function () {
    console.log("listening on port 8000");
})
