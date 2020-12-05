"use strict";

var express = require("express");

var app = express();

var connectDb = require("./src/connection");

var User = require("./src/User.model");

var cors = require('cors');

app.use(cors());
var PORT = 9500;
app.get("/users", function _callee(req, res) {
  var users;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(User.find());

        case 2:
          users = _context.sent;
          res.json(users);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
app.get("/user-create", function _callee2(req, res) {
  var user;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          user = new User({
            username: "userTest"
          });
          _context2.next = 3;
          return regeneratorRuntime.awrap(user.save().then(function () {
            return console.log("User created");
          }));

        case 3:
          res.send("User created \n");

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
});
app.listen(PORT, function () {
  console.log("Listening on ".concat(PORT));
  connectDb().then(function () {
    console.log("MongoDb connected");
  });
});