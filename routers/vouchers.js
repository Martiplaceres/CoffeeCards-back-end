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

router.put("/:voucherId", authMiddleware, async (req, res, next) => {
  try {
    const { voucherId } = req.params;
    const id = req.user.id;
    console.log("ID", id);

    const userWithStore = await User.findByPk(id, {
      include: { model: Store },
    });
    console.log(" user with store", userWithStore.dataValues);

    const voucherToUpdate = await Voucher.findByPk(voucherId, {
      include: { model: Store },
    });
    console.log("Voucher to update", voucherToUpdate.dataValues);
    if (!voucherToUpdate) {
      res.status(404).send("Voucher not found");
    } else if (voucherToUpdate.claimed) {
      res.status(404).send("Voucher is already claimed");
    } else if (userWithStore.store.id !== voucherToUpdate.store.id) {
      res
        .status(403)
        .send(`This voucher doesn't belong to ${userWithStore.store.name}`);
    } else {
      const updatedVoucher = await voucherToUpdate.update({
        claimed: true,
      });
      res.json(updatedVoucher);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
