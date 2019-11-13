const axios = require("axios");

export default {


    getTours: function (city) {
        return axios.get("/api/tours/" + city)
    },

    getMyTours: function (id) {
        return axios.get("/api/profile/" + id)
    },

    saveTour: function (data) {
        return axios.post("/api/tours/", data)
    },

    deleteTour: function (id) {
        return axios.delete('/api/profile/' + id)
    },

    // Auth Functinos
    login: function (creds) {
        return axios.post("/auth/login", creds)
    },

    signup: function (creds) {
        return axios.post("/auth/signup", creds)
    },

    logout: function () {
        return axios.get("/auth/logout")
    },

    getUser: function () {
        return axios.get("/auth/user")
    }
}