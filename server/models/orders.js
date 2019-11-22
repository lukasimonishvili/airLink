const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  idNumber: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

const Order = mongoose.model("order", OrderSchema);

module.exports = { Order };
