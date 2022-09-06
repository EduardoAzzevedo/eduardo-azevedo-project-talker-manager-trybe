const express = require('express');
const { deleteTalker } = require('../utilits/readWriteFs');
const tokenValidation = require('../middlewaresTalker/tokenValidation');

const routerDelete = express.Router();

routerDelete.delete('/talker/:id', tokenValidation, async (req, res) => {
  const { id } = req.params;
  await deleteTalker(Number(id));
  return res.status(204).end();
});

module.exports = routerDelete;