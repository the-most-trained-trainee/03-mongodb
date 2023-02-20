const Joi = require('joi');

const addScheme = Joi.object({
  id: Joi.number().required,
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required()
});

module.exports = { addScheme, }