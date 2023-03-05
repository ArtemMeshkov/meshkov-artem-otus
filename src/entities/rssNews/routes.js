
module.exports = {
    register(express, rssLinkInstance) {
      
/**
 * @swagger
 *
 * /rssLink/:
 *   post:
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               link:
 *                  type: string
 *                  description: The news link
 *                  example: "https://cyber.sports.ru/rss/all_news.xml"
 *     responses:
 *         201:
 *             description: Created
 */
      express.post('/rssLink', async (req, res, next) => {
        try {
          const instance = await rssLinkInstance.create(req.body.link);
    
          res.send({ success: true, data: { id: instance._id.toString() } });
        } 
        catch (e) {
          next(e);
          //res.json(e.message)
        }
      });
  
 /**
 * @swagger
 *
 * /rssLink/:
 *   get:
 *     produces:
 *       - application/json
 *     responses:
 *         201:
 *             description: Get all links
 */
      express.get('/rssLink', async (req, res) => {
        //console.log(rssLinkInstance);
        const result = await rssLinkInstance.findAllUrlLinks();
  
        res.send({ success: true, data: result });
      });
  
    /**
     * @swagger
     *
     * /rssDocs/:
     *   get:
     *     produces:
     *       - application/json
     *     responses:
     *         201:
     *             description: Get all links
     */
    express.get('/rssDocs', async (req, res) => {
      const result = await rssLinkInstance.findAllRssDocs();

      res.send({ success: true, data: result });
    });
  }
}