import axios from "axios";
import { getCookie } from "../utills";
import { CookieName } from "../constants";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8000";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getCookie(CookieName.AUTH_TOKEN);
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
