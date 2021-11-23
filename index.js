const express = require("express");
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");
const authRouter = require("./routers/auth");
const stampsRouter = require("./routers/stamps");

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
app.use("/stamps", stampsRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
