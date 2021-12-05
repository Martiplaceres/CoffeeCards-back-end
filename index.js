const express = require("express");
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");
const authRouter = require("./routers/auth");
const transactionRouter = require("./routers/transactions");
const voucherRouter = require("./routers/vouchers");
const storeRouter = require("./routers/store");
const beansRouter = require("./routers/beans");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "frontend/build")));

app.use(corsMiddleWare());
const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

app.use("/auth", authRouter);
app.use("/api/transaction", transactionRouter);
app.use("/api/vouchers", voucherRouter);
app.use("/api/store", storeRouter);
app.use("/api/beans", beansRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + `/frontend/build/index.html`));
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
