const express = require("express");
const router = express.Router();

const { Message } = require("../models/messages");

router.post("/send", (req, res) => {
  let message = new Message(req.body);
  message
    .save()
    .then(response => {
      res.json({
        status: 200,
        data: message
      });
    })
    .catch(err => {
      res.json({
        status: 400,
        data: err
      });
    });
});

module.exports = router;
