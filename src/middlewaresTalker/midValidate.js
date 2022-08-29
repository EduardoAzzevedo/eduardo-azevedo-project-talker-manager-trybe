// const validateMid = (req, res, next) => {
//   const talkerInfo = req.body;
//   const requireInfo = ['name', 'age', 'id', 'talk', 'watchedAt', 'rate'];
//   const hasInfo = requireInfo.every((property) => property in talkerInfo);

//   if (!hasInfo) {
//   return res.status(200).json([]);
//   }

//   next();
// };

// module.exports = validateMid;