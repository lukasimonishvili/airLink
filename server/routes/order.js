const express = require("express");
const router = express.Router();

const { Order } = require("../models/orders");

router.post("/new", (req, res) => {
  console.log(req.body);
  let newOrder = new Order(req.body);
  newOrder
    .save()
    .then(response => {
      res.json({
        status: 200,
        data: newOrder
      });
    })
    .catch(err => {
      console.log("error", err);
      res.json({
        status: 400,
        data: err
      });
    });
});

module.exports = router;
