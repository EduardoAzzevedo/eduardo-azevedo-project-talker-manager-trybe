const emptyPassword = (req, res, next) => {
  const { password } = req.body;
  if (typeof password === 'undefined' || password === '') {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  next();
};

module.exports = emptyPassword;