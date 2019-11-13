const router = require('express').Router();
const toursController = require('./../controllers/toursController');

router.route('/')
    .get(toursController.getTours);

module.exports = router;