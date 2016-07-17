const winston = require('winston');
const services = require('./services');

winston.level = 'debug';

services.add('logger', winston);// todo move to services
