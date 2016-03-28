var express = require("express")
var path = require("path")

var app = express()

app.get("/", function(req, res) {
  res.sendFile(path.resolve("app.html"))
})

app.use(express.static("public"))

app.listen(3000, function() {
  console.log("Server listening on", 3000)
})
