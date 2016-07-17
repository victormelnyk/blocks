require('./serv'); // init serv

const logger = require('./serv').get('logger');
const page = require('./serv').get('page');

logger.warn(page.process());

logger.info('Done');
