const RssLinkInstance = require('./instance')
const userRoutes = require('./routes')

module.exports = {
  register(express, mongoose) {
    const rssLink = new RssLinkInstance(mongoose);

    userRoutes.register(express, rssLink);
  }
}