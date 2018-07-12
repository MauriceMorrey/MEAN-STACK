var path=require('path')

module.exports = function(app) {
app.all("*", function(request,response,next) {
    response.sendFile(path.resolve("./public/CoinShinto/dist/CoinShinto/index.html"))
  });
}