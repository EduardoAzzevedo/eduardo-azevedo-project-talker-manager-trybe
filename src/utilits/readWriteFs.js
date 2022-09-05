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
  } catch (err) {
    console.log(err);
    return null;
  }
};

const editTalkers = async (id, newInfo) => {
  try {
		const arrayTalkers = await readTakerFile();
		console.log(arrayTalkers);
		const talkerUpdate = arrayTalkers.find((talker) => talker.id === id);
    if (talkerUpdate) {
      const update = arrayTalkers.map((talker) => {
        if (talker.id === id) {
          return { ...talker, ...newInfo };
        }
        return talker;
      });
      await fs.writeFile(fileName, JSON.stringify(update));
      return { id, ...newInfo };
    }
  } catch (error) {
    return null;
  }
};

module.exports = {
  readTakerFile,
  postNewTalker,
  editTalkers,
};