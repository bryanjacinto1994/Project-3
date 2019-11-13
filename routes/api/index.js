const router = require('express').Router();
const tourRoutes = require('./tours');

router.use('/tours', tourRoutes);

module.exports = router;