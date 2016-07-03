const logger = require('./serv/logger');

const Page = require('./lib/page');

logger.warn(new Page().process());

logger.info('Done');
