
import axios from "axios";
const API_URL = "https://opentdb.com/api.php";

const axiosOptions = {
  baseURL: API_URL,
};

const axiosService = axios.create(axiosOptions);

export default axiosService;
