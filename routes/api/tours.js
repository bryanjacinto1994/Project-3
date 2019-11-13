const router = require('express').Router();
const toursController = require('../../controllers/toursController');

router.route('/')
    .get(toursController.getTours);

    router.route("/:city")
    .get(toursController.getTours)

module.exports = router;