const router = require('express').Router();
const apiRoutes = require('./api');
const authRoutes = require('./authentication');

router.use('/api', apiRoutes);

module.exports = router;