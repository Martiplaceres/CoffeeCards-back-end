const { Router } = require("express");
const Transactions = require("../models").transaction;
const Bean = require("../models").bean;
const User = require("../models").user;
const Store = require("../models").store;
const Voucher = require("../models").voucher;

const router = new Router();

router.get("/:beanId", async (req, res, next) => {
  try {
    const { beanId } = req.params;
    const bean = await Bean.findByPk(beanId);
    if (!bean) {
      res.status(403).send({ message: "Bean not found" });
    }
    res.send(bean);
  } catch (e) {
    next(e);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const allBeans = await Bean.findAll();
    res.send(allBeans);
  } catch (e) {
    next(e);
  }
});
module.exports = router;
