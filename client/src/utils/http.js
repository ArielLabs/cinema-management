import env from "../environment";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: env.apiURL,
  headers: {
    "Content-Type": "application/json",
  },
});
