let express = require("express"),
    bodyParser = require("body-parser"),
    _ = require("lodash"),
    path = require("path"),
    cors = require("cors"),
    app = express(),
    port = process.env.PORT || 5000;

let getRandomInteger = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

app.get("/", function(req, res, next) {
  return res.send("OJet API");
});

app.get("/api/users", function(req, res, next) {
  let users = require('./data/users.json');
  return res.json(users);
});

app.get("/api/users/:id", function(req, res, next) {
  let users = require('./data/users.json');
  return res.json(_.find(users, (user) => user.id = req.params.id));
});

app.use(function(req, res, next) {
  res.status(404);
  return res.type("txt").send("Not found");
});

let server = app.listen(port, function() {
  let host = server.address().address,
    port = server.address().port;

  console.log("Ojet server listening at http://%s:%s", host, port);
});
