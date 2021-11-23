const { Router } = require("express");
const Stamp = require("../models/").stamp;
const Bean = require("../models/").bean;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const stamps = await Stamp.findAll({
      include: { model: Bean },
    });
    res.send(stamps);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
