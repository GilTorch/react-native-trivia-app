import axios from "./axiosService";

class API {


  static async getQuestions(amount = 10, difficulty = "hard", type = "boolean") {
    return await axios.get(`?amount=${amount}&difficulty=${difficulty}&type=${type}`);
  }

}

export default API;