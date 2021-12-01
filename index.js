const express = require("express");
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");
const authRouter = require("./routers/auth");
const transactionRouter = require("./routers/transactions");
const voucherRouter = require("./routers/vouchers");
const storeRouter = require("./routers/store");
const beansRouter = require("./routers/beans");
const app = express();

app.use(corsMiddleWare());
const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

app.use("/auth", authRouter);
app.use("/transaction", transactionRouter);
app.use("/vouchers", voucherRouter);
app.use("/store", storeRouter);
app.use("/beans", beansRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
