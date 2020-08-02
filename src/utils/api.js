import axios from "axios";

export default {
  profiles: () => {
    return axios.get(
      "https://randomuser.me/api/?results=50"
    );
  }
};

