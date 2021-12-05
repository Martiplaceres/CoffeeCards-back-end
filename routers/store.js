const { Router } = require("express");
const Store = require("../models").store;
const { getToken } = require("../qrcode");

const router = new Router();

const baseUrl = process.env.BASE_URL || "http://localhost:4000";

router.get("/qr", async (req, res, next) => {
  try {
    const { storeuser, quantity, bean } = req.query;
    const token = getToken(storeuser, quantity, bean);
    const transactionUrl = `${baseUrl}/scan?token=${token}&storeuser=${storeuser}&quantity=${quantity}&bean=${bean}`;
    const response = { qrCodeUrl: transactionUrl };
    return res.status(200).send(response);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
