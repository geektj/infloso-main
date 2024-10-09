import axios from "axios";

const BASE_URL = "http://localhost:8000";

const axiosInstance = axios.create({
  //   baseURL: process.env.REACT_APP_API_BASE_URL,
  baseURL: BASE_URL,
  withCredentials: true,
});

export default axiosInstance;
