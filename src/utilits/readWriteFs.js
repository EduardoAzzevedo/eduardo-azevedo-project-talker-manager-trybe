/* eslint-disable no-tabs */
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

const writeFile = async (content) => {
  try {
    await fs.writeFile(fileName, JSON.stringify(content));
    console.log('Arquivo escrito');
  } catch (err) {
    console.error(`Erro ao tentar escrever o arquivo: ${err.message}`);
  }
};

const postNewTalker = async (post) => {
  try {
    const arrayTalker = await readTakerFile();
    const newPost = {
      id: arrayTalker.length + 1,

      ...post,
    };
    arrayTalker.push(newPost);
    await fs.writeFile(fileName, JSON.stringify(arrayTalker));
    return newPost;
  } catch (erro) {
    console.log(erro);
    return null;
  }
};

const editTalkers = async (id, newInfo) => {
  const arrayTalkers = await readTakerFile();
  const talkerUpdate = arrayTalkers.find((talker) => talker.id === id);
  if (talkerUpdate) {
    const update = arrayTalkers.map((talker) => {
      if (talker.id === id) {
        return { ...talker, ...newInfo };
      }
      return talker;
    });
    await writeFile(update);
  }
  return { id, ...newInfo };
};

const deleteTalker = async (id) => {
  const talkerList = await readTakerFile();
  const idToDelete = talkerList.find((talker) => talker.id === id);
  if (idToDelete) {
    const deleteTalkerId = talkerList.filter((talker) => talker.id !== id);
    await writeFile(deleteTalkerId);
  }
};

module.exports = {
  readTakerFile,
  writeFile,
  postNewTalker,
  editTalkers,
  deleteTalker,
};