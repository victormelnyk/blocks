const provider = require('./provider');

require('./logger');

provider.setLogger(provider.get('logger'));

require('./page');

module.exports = provider;
