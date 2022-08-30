const fs = require('fs/promises');
const { join } = require('path');

const fileName = '../src/talker.json';

const readTakerFile = async () => {
  try {
    const arrayTalker = await fs.readFile(join(__dirname, fileName), 'utf-8');
    const TalkerList = JSON.parse(arrayTalker);
    return TalkerList; 
  } catch (err) {
    return [];
  }
};

const getAllTalkers = async () => {
  const allTalker = await readTakerFile();
  return allTalker;
};

module.exports = {
  getAllTalkers,
};