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
