const db = require("../models");
const axios = require("axios");
// const TourCMSApi = require("tourcms");

const log = console.log

module.exports = {
    getTours: (req, res) => {
        console.log("Getting tours")

        let preCity = req.params.city
        let newStr = ''
        for (let i = 0; i < preCity.length; i++) {
            if (preCity[i] === ' ') {
                newStr += '_'
            } else {
                newStr += preCity[i]
            }
        }
        let accountID = '7IEBG9VK';
        let apiToken = 'tbl4ejykaan3v4o03cv1scgni1r96z9q';
        let city = newStr;
        console.log("\nCity")
        console.log(city)

        axios.get(`https://www.triposo.com/api/20190906/tour.json?location_ids=${city}&account=${accountID}&token=${apiToken}`)
            .then(response => {
                console.log(response.data)
                res.json(response.data)
            })


        // For city
        // axios.get(`https://www.triposo.com/api/20190906/location.json?id=San_Francisco&account=${accountID}&token=${apiToken}`)
        //     .then(response => {
        //         log("\nResponse Data")
        //         log(response.data)

        //         log("\nResults")
        //         log(response.data.results)

        //         log("\nAttribution0")
        //         log(response.data.results[0])

        //         res.json(response.data.results)
        //     })

        // for tour

    }
}