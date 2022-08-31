const express = require('express');
const randomToken = require('../utilits/token');

const routerLogin = express.Router();

routerLogin.post('/login', (req, res) => {
  const token = { token: randomToken() };
  return res.status(200).json(token);
});

module.exports = routerLogin;