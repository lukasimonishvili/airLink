const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");

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

router.get("/all/:id", authMiddleware.isLogedIn, (req, res) => {
  Message.find().then(result => {
    if (result.length) {
      res.json({ status: 200, message: "success", data: result })
    } else {
      res.json({ status: 400, message: "No messages for now", data: [] })
    }
  }).catch(err => {
    res.json({ status: 500, message: "Syste error - please try again", error: err })
  })
});

router.delete("/delete/:id/:messageId", authMiddleware.isLogedIn, (req, res) => {
  let id = req.params.messageId;
  Message.findByIdAndDelete(id).then(result => {
    if (result) {
      res.json({ status: 200, message: "Deleted" });
    } else {
      res.json({status: 400, message: "messages not found in data base"})
    }
  }).catch(err => {
    res.json({status: 500, message: "system error - please try again", error: err})
  })
})

module.exports = router;
