const db = require("../models");
const Op = require('sequelize').Op;

module.exports = {
    getMyTours: (req, res) => {
        console.log("Getting Tours")
        let userID = parseInt(req.params.id);
        db.userTour.findAll({
            where: {
                userID
            }
        }).then(dbTours => {
            let tourID = [];
            for (let i = 0; i < dbTours.length; i++) {
                tourID.push(dbTours[i].dataValues.tourID)
            }
            console.log(tourID)
            if (tourID.length === 0) {
                res.json(tourID)
            } else {
                db.Tour.findAll({
                    where: {
                        id: {
                            [Op.or]: tourID
                        }
                    }
                }).then(dbTour => {
                    console.log(dbTour);
                    res.json(dbTour);
                })
            }
        })

    },

    deleteTour: (req, res) => {
        console.log("deleting Tour")
        let { id } = req.params
        db.Tour.destroy({
            where: {
                id
            }
        }).then(dbTour => {
            console.log("Tour Deleted")
            res.json(dbTour)
        })
    }
}