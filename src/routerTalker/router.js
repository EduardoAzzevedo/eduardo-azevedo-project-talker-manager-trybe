const express = require('express');
const { readTakerFile } = require('../utilits/readWriteFs');

const router = express.Router();

router.get('/talker', async (req, res) => {
  const talker = await readTakerFile();
  return res.status(200).json(talker);
});

module.exports = router;