const express = require('express');
const { postNewTalker } = require('../utilits/readWriteFs');
const tokenValidation = require('../middlewaresTalker/tokenValidation');
const nameValidation = require('../middlewaresTalker/nameValidation');
const ageValidation = require('../middlewaresTalker/ageValidation');
const talkValidation = require('../middlewaresTalker/talkValidation');
const watchedValidation = require('../middlewaresTalker/watchedAtValidation');
const rateValidation = require('../middlewaresTalker/rateValidation');

const routerPost = express.Router();

routerPost.post('/talker',
tokenValidation, nameValidation,
ageValidation, talkValidation,
watchedValidation, rateValidation, async (req, res) => {
  const talkerPost = req.body;
  const insertTalker = await postNewTalker(talkerPost);
  console.log('incluido', insertTalker);
  return res.status(201).json(insertTalker);
});

module.exports = routerPost;