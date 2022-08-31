const emptyEmail = (req, res, next) => {
  const { email } = req.body;
  if (email === '' || typeof email === 'undefined') {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  next();
};

module.exports = emptyEmail;