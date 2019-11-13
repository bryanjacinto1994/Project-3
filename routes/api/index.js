const router = require('express').Router();
const tourRoutes = require('./tours');
const profileRoutes = require('./profile');

router.use('/tours', tourRoutes);
router.use('/profile', profileRoutes);

module.exports = router;