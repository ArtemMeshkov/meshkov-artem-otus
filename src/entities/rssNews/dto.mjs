import { Joi } from 'express-validation';

export const rssLinkCreate = {
  body: Joi.object({
    rssDocs: Joi.string().required(),
    link: Joi.string().required(),
  }),
}