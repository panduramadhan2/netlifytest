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
    accountAlias: "RICKY SUKONO",
    accountIndex: 0,
    accountLinking: null,
    accountNumber: "0351002972",
    accountOwnerName: "RICKY SUKONO",
    accountStatus: 1,
    accountType: "1",
    additionalData: null,
    balance: 7777777777,
    cardNumber: null,
    cardStatus: null,
    currency: "IDR",
    isDof: true,
    isPrimary: false,
    isSof: true,
    isVisible: null,
    ordering: null,
    productCode: "T11",
    productName: "TABUNGAN ENA MAJU JAYA JAYA JAYA",
    productType: "1",
    securitiesAccountDto: null,
    userProfileId: null,
  });
});

app.use("/.netlify/functions/api", router);

module.exports = app;
module.exports.handler = serverless(app);
