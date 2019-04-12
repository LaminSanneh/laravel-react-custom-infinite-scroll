import axios from "axios";

export default {
    getAll (limit = 10) {
      return axios.get("/api/posts", {
        params: {
          limit: 15
        }
      }).then((res) => { return res.data });
    }
}