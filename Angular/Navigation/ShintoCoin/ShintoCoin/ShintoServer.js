var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path=require('path')


app.use(express.static(path.join(__dirname, "/public/CoinShinto/dist/CoinShinto")));
app.use(bodyParser.json());

require("./server/config/routes.js")(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
  });