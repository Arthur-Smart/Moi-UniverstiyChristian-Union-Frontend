import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: "https://moiuniversitycu.onrender.com/"
  baseURL: "http://localhost:5000/",
});
