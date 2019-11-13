const axios = require('axios');

export default {
    getTours: function () {
        return axios.get('/api/tours')
    },
    login: function (creds) {
        return axios.post("/auth/login", creds)
    },

    signup: function (creds) {
        return axios.post("/auth/signup", creds)
    },

    logout: function () {
        return axios.get("/auth/logout")
    }
}