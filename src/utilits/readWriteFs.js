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

module.exports = {
  readTakerFile,
  postNewTalker,
};