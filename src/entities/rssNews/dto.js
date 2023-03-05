const { Joi } = require('express-validation');

const rssLinkCreate = {
  body: Joi.object({
    rssDocs: Joi.string().required(),
    link: Joi.string().required(),
  }),
}

module.exports = {
    rssLinkCreate
}