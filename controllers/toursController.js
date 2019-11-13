const db = require('../models');

const TourCMSApi = require('tourcms');

module.exports = {
    getTours: (req, res) => {
        console.log("Getting the Tours")
        let TourCMS = new TourCMSApi({
            channelId : 0,
            apiKey: '6a2e1a115e9f',
            marketplaceId: 47494
        });

        TourCMS.searchTours({
            channelId: 3930,
            qs: {
                //Keyword - matches against Tour name, Location, Short description, Summary, Tour code
                k: 'rafting',
                //TourCMS internally converts all prices to USD for ordering purposes
                order: 'price_down'
            },
            callback: function(response){
                console.log(response);
            }
        });
    }
}