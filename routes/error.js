module.exports = function(req, res, next) {
  res.status(404);
  res.send({ error: 'Not Found' });
  return;
};
