const router = require('express').Router();

// const demoRouter = require('./demo-api');
// demoRouter(router);
require('./demo-api')(router);

require('./product-api')(router);

module.exports = router;