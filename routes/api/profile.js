const router = require('express').Router();
const profileController = require("../../controllers/profileController");

router.route("/:id")
    .get(profileController.getMyTours)
    .delete(profileController.deleteTour)

module.exports = router