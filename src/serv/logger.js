const winston = require('winston');
const provider = require('./provider');

winston.level = 'debug';

provider.addInstance('logger', winston);
