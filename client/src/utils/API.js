import axios from "axios";

export default {

    findBooks: function (query) {
        console.log(query)
        return axios.get("/api/search/" + query)
    }

}