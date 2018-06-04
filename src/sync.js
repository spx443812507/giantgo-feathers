const sync = require('feathers-sync');
const logger = require('winston');

module.exports = function (app) {
  // Configure Redis
  app.configure(sync({
    uri: app.get('redis')
  }));

  app.sync.ready.then(() => {
    // Do things here
    logger.info('feathers-sync ready');
  });
};
