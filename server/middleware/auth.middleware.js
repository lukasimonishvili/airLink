const { User } = require("../models/user");

module.exports = {
  isLogedIn: (req, res, next) => {
    User.find({ _id: req.params.id }).then(result => {
      if (result.length) {
        next();
      } else {
        res.json({ status: 401, message: "Unauthorized" });
      }
    });
  }
};
