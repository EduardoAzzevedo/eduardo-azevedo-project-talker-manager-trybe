const express = require('express');
const randomToken = require('../utilits/token');
const emptyEmail = require('../middlewaresTalker/emptyEmailValid');
const emailForm = require('../middlewaresTalker/validEmailForm');
const emptyPassword = require('../middlewaresTalker/emptyPassword');
const passwordLength = require('../middlewaresTalker/passwordLength');

const routerLogin = express.Router();

routerLogin.post('/login', emptyEmail, emailForm, emptyPassword, passwordLength, (req, res) => {
  const token = { token: randomToken() };
  return res.status(200).json(token);
});

module.exports = routerLogin;