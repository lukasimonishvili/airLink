// server.js
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const http = require("http");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const { connect } = require("./server/DB/conn");

//Routes
const message = require("./server/routes/message");
const order = require("./server/routes/order");
const user = require("./server/routes/user");

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "dist/airLink")));

app.use("/api/message", message);
app.use("/api/order", order);
app.use("/api/user", user);
// Send all other requests to the Angular app
app.all("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/airLink/index.html"));
});

//Set Port
const port = process.env.PORT || "3000";
app.set("port", port);
const server = http.createServer(app);

(async () => {
  try {
    await connect(
      "mongodb+srv://simonishvililuka:ETgi6gF0vIu3I2hn@airlink-dwxwd.mongodb.net/airLink?retryWrites=true&w=majority"
    );
    server.listen(port, () => {
      console.log(`Running on localhost:${port}`);
      console.log("database connected");
    });
  } catch (err) {
    console.log("can`t connetc to database", err);
  }
})();

// Heroku port
//app.listen(process.env.PORT || 8080);
