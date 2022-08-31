const passwordLength = (req, res, next) => {
  const SIX = 6;
  const { password } = req.body;
  if (password.length < SIX) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  next();
};

module.exports = passwordLength;