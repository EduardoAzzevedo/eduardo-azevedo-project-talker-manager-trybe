const generateRandomToken = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  const charactersLength = characters.length;
  for (let i = 0; i < 16; i += 1) {
      token += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return token;
};
// referĂȘncia https://www.delftstack.com/pt/howto/javascript/javascript-random-string/

module.exports = generateRandomToken;
