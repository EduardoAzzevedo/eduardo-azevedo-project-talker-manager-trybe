const express = require('express');
const { postNewTalker } = require('../utilits/readWriteFs');

const routerPost = express.Router();

routerPost.post('/talker', async (req, res) => {
  const talkerPost = req.body;
  const insertTalker = await postNewTalker(talkerPost);
  console.log('incluido', insertTalker);
  return res.status(201).json(insertTalker);
});

module.exports = routerPost;