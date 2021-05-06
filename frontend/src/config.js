import axios from "axios";

const axiosConfig = {
  baseUrl: "http://localhost:5000",
  withCredentials: true,
};

export const API = axios.create(axiosConfig);
