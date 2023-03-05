const express = require('express');
const app = express();

const { mognoose, sequelize } = require('./db')
const rssLink = require('./entities/rssNews')
const swaggerUi = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc')

;(async() => {
  const mognooseClient = await mognoose.start();
  const options = swaggerJSDoc({
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Rss api swagger',
        version: '1.0.0',
      },
    },
    apis: ['./src/entities/rssNews/routes.js'], // files containing annotations as above
  });
  
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(options));
  app.use(express.json());

  // app - сервер, mognooseClient - клиент для mongodb
  rssLink.register(app, mognooseClient)

  app.use((err, req, res, next) => {
    if (err instanceof HTTPError) {
      return res.status(400).send({ success: false, error: { msg: 'err' }});
    }
    if (err instanceof Error) {
      return res.status(500).send({ success: false, error: { msg: err.message }});
    }
  })

  app.listen(8080, (err) => {
    if (err) {
      console.error('Server started with error', err);
      
      return;
    }

    console.log('Server started on 8080 port');
  })
})()