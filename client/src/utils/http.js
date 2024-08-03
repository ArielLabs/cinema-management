import env from "../environment";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: env.apiURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
