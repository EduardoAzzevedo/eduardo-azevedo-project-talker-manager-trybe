const express = require('express');
const { getAllTalkers } = require('../utilits/readWriteFs');

const router = express.Router();

router.get('/talker', async (req, res) => {
  const talker = await getAllTalkers();
  return res.status(200).json(talker);
});

module.exports = router;