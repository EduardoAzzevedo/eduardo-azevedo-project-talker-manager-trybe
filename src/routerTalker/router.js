const express = require('express');
const { readTakerFile } = require('../utilits/readWriteFs');
const tokenValidation = require('../middlewaresTalker/tokenValidation');
const nameValidation = require('../middlewaresTalker/nameValidation');

const router = express.Router();

router.get('/talker', tokenValidation, nameValidation, async (req, res) => {
  const talker = await readTakerFile();
  return res.status(200).json(talker);
});

module.exports = router;