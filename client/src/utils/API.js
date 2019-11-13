const axios = require('axios');

export default {
    getTours: function () {
        return axios.get('/api/tours')
    }
}