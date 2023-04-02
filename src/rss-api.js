import express from 'express';
import swaggerUiExpress from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const app = express();
import { start } from './db/mongoose.mjs';
import { registerRss } from './entities/rssNews/index.mjs';

;(async() => {
  const mognooseClient = await start();
  const options = swaggerJsdoc({
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Rss api swagger',
        version: '1.0.0',
      },
    },
    apis: ['./src/entities/rssNews/routes.js'], // files containing annotations as above
  });
  
  app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(options));
  app.use(express.json());

  // app - сервер, mognooseClient - клиент для mongodb
  registerRss(app, mognooseClient)

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