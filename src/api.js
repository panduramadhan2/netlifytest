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
    id: 3,
    name: "Lionel Messi",
    username: "Lionel",
    password: "7777777",
    phone: "Lionel Messi",
    email: "jhon@mail.com",
    rek: "1",
    dob: "2000-04-29",
    balance: 7777777777,
    bank: "bri",
    roles: [{ id: 1, name: "ROLE_USER" }],
  });
});

router.post("/transaksi", (req, res) => {
  res.json(
    {
      id: 1,
      action: "TopUp Wallet",
      tujuan: "OVO - 0882 4824 5362",
      amount: 1400000,
    },
    {
      id: 2,
      action: "TopUp Wallet",
      tujuan: "OVO - 0882 4824 5361",
      amount: 1400000,
    },
    {
      id: 3,
      action: "TopUp Wallet",
      tujuan: "OVO - 0882 4824 5364",
      amount: 1400000,
    }
  );
});

app.use("/.netlify/functions/api", router);

module.exports = app;
module.exports.handler = serverless(app);
