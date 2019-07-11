import axios from "axios";

export default {

    findBooks: function (query) {
        console.log(query)
        return axios.get("/api/search/" + query)
    },
    saveEntry: function (entryData) {
        return axios.post("/api/entries", entryData)
    },
    showAll: function () {
        return axios.get("api/entries")
    }

}