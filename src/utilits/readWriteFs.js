const fs = require('fs/promises');

const fileName = './src/talker.json';

const readTakerFile = async () => {
  try {
    const arrayTalker = await fs.readFile(fileName, 'utf-8');
    return JSON.parse(arrayTalker);
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getAllTalkers = async () => {
  const allTalker = await readTakerFile();
  return allTalker;
};

module.exports = {
  getAllTalkers,
  readTakerFile,
};