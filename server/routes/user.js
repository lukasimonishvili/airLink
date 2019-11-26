const express = require("express");
const router = express.Router();

const { User } = require("../models/user");

router.post("/login", (req, res) => {
  let payLoad = req.body;
  User.find(req.body)
    .then(user => {
      let admin = user[0];
      if (
        user.length &&
        payLoad.userName == admin.userName &&
        payLoad.password == admin.password
      ) {
        res.json({ status: 200, message: "success", data: admin });
      } else {
        res.json({
          status: 400,
          message: "this combination of user name and password is incorrect"
        });
      }
    })
    .catch(err => {
      res.json({
        status: 500,
        message: "can`t login - system error, please try again later"
      });
    });
});

module.exports = router;
