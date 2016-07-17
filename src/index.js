require('./serv/logger');// todo implement auto load

const services = require('./serv/services');

const logger = services.get('logger');

const Page = require('./lib/page');

logger.warn(new Page().process());

logger.info('Done');
