const express = require('express');
const { readTakerFile } = require('../utilits/readWriteFs');

const routerId = express.Router();

routerId.get('/talker/:id', async (req, res) => {
  try {
    const allTalkers = await readTakerFile();
    const idTalker = allTalkers.find(({ id }) => id === Number(req.params.id));
    if (idTalker.length !== 0) {
      return res.status(200).json(idTalker);
    }
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  } catch (err) {
    console.log(err);
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
});

module.exports = routerId;