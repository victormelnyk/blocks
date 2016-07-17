const Page = require('./../comp/page');

const provider = require('./provider');

provider.add('page', () => new Page());
