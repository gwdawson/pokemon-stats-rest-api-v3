exports.defaultSuccess = async (req, res) => {
  res.status(200).send({ status: 200, message: 'Welcome to the pokemon-api-v3', endpoints: ['GET /api/pokemon'] });
};

exports.defaultError = async (req, res) => {
  res.status(404).send({ status: 404, message: 'Not Found', default: '/api' });
};
