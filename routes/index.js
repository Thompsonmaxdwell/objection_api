const express = require("express");
const User = require("../db/Models/User");

const route = express.Router();

// User route 
route.get("/user", async (req, res, next) => {
  const user = await User.query();
  return res.send(user);
});

route.get("/user/:id", async (req, res, next) => {
  const { id } = req.params;
  //   Validate your request body here ->

  const user = await User.query().findById(id).withGraphFetched("channel");
  return res.send(user);
});


module.exports = route;
