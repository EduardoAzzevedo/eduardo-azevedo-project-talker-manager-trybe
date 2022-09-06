const express = require('express');
const tokenValidation = require('../middlewaresTalker/tokenValidation');
const { querySearch } = require('../utilits/readWriteFs');

const routerQuery = express.Router();

routerQuery.get('/talker/search', tokenValidation, async (req, res) => {
  const { q } = req.query;
  const talkerFilter = await querySearch(q);
  return res.status(200).json(talkerFilter); 
});

module.exports = routerQuery;