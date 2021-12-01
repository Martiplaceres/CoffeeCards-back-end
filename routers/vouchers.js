const { Router } = require("express");
const Voucher = require("../models").voucher;
const User = require("../models").user;
const Store = require("../models").store;
const router = new Router();
const authMiddleware = require("../auth/middleware");

router.get("/", async (req, res, next) => {
  try {
    const vouchers = await Voucher.findAll({
      include: { model: User },
    });
    if (!vouchers.length) {
      return res.status(403).send({ message: "No vouchers available" });
    }
    res.send(vouchers);
  } catch (e) {
    next(e);
  }
});

router.get("/:userId", async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const voucher = await Voucher.findAll({
      include: { model: Store },
      where: {
        userId: userId,
        claimed: false,
      },
    });
    if (voucher.length === 0) {
      return res.send("No vouchers");
    }
    return res.send(voucher);
  } catch (e) {
    next(e);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const voucherToUpdate = await Voucher.findByPk(id);
    console.log("I'm here", voucherToUpdate);
    if (!id) {
      res.status(404).send("Voucher not found");
    } else {
      const updatedVoucher = await voucherToUpdate.update(req.body);
      res.json(updatedVoucher);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
