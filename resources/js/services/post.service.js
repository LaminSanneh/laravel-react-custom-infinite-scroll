import axios from "axios";

export default {
    getAll (limit, pageNumber) {
      return axios.get("/api/posts", {
        params: {
          limit: limit,
          pageNumber: pageNumber
        }
      }).then((res) => { return res.data });
    }
}