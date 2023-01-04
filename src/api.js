const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});

router.post("/test", (req, res) => {
  res.json({
    id: "Lionel Messi",
    name: 0,
    username: null,
    password: "0351002972",
    phone: "Lionel Messi",
    email: 1,
    rek: "1",
    dob: null,
    balance: 7777777777,
    bank: null,
    roles: [{ id: 1, name: "ROLE_USER" }],
  });
});

app.use("/.netlify/functions/api", router);

module.exports = app;
module.exports.handler = serverless(app);
