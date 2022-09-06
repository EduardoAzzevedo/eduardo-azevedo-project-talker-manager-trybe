const express = require('express');
const { editTalkers } = require('../utilits/readWriteFs');
const tokenValidation = require('../middlewaresTalker/tokenValidation');
const nameValidation = require('../middlewaresTalker/nameValidation');
const ageValidation = require('../middlewaresTalker/ageValidation');
const talkValidation = require('../middlewaresTalker/talkValidation');
const watchedValidation = require('../middlewaresTalker/watchedAtValidation');
const rateValidation = require('../middlewaresTalker/rateValidation');

const routerEdit = express.Router();

routerEdit.put('/talker/:id',
tokenValidation, nameValidation,
ageValidation, talkValidation,
watchedValidation, rateValidation,
async (req, res) => {
  const id = Number(req.params.id);
  const updateTalker = { ...req.body };
  const update = await editTalkers(id, updateTalker);
  return res.status(200).json({ ...update });
});

module.exports = routerEdit;