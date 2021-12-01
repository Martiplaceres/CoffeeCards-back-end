const { totp } = require("otplib");
const secret = "change-me-please!";

totp.options = {
  step: 10, // period (in seconds) in which the generated code is valid
  window: [5, 2], // amount of valid periods before and after the current time
};

const getSecret = (store, quantity, bean) => {
  return secret + store + quantity.toString() + bean;
};
const getToken = (store, quantity, bean) => {
  return totp.generate(getSecret(store, quantity, bean));
};
const validateToken = (token, store, quantity, bean) => {
  return totp.check(token, getSecret(store, quantity, bean));
};

module.exports = { getToken, validateToken };
