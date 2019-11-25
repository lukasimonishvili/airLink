const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");

const { Order } = require("../models/orders");

router.get("/all/:id", authMiddleware.isLogedIn, (req, res) => {
  Order.find()
    .then(result => {
      if (result && result.length) {
        res.json({ status: 200, message: "success", data: result });
      } else {
        res.json({ status: 400, message: "no orders for now", data: [] });
      }
    })
    .catch(err => {
      res.json({
        status: 500,
        message: "server error - please try again later",
        error: err
      });
    });
});

router.post("/new", (req, res) => {
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

router.delete("/remove/:id/:orderId",authMiddleware.isLogedIn, (req, res) => {
  let id = req.params.orderId;
  Order.findByIdAndRemove(id).then(result => {
    if (result) {
      res.json({ status: 200, message: "Deleted" });
    } else {
      res.json({status: 400, message: "order not found in data base"})
    }
  }).catch(err => {
    res.json({status: 500, message: "system error - please try again", error: err})
  })
})

module.exports = router;
