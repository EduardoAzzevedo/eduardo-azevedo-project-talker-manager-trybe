const express = require('express');
const { readTakerFile } = require('../utilits/readWriteFs');
const tokenValidation = require('../middlewaresTalker/tokenValidation');

const routerDelete = express.Router();

routerDelete.delete('/talker/:id', tokenValidation, (req, res) => {
  const id = Number(req.params.id);
  const allTalkers = readTakerFile();
  const talkerId = allTalkers.filter((i) => i.id !== id);
  if (talkerId) {
    const index = readTakerFile.indexOf(talkerId);
    readTakerFile.splice(index, 1);
  }
  return res.status(204).end();
});

module.exports = routerDelete;