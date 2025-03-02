import axios from "axios";

const BASE_URL = window.env?.REACT_APP_API_URL || 'localhost';

if (!BASE_URL) {
  throw new Error("API base URL is not defined in the environment variables.");
}

const fullBaseURL = BASE_URL.startsWith("http://") || BASE_URL.startsWith("https://")
  ? BASE_URL : `http://${BASE_URL}`;

const finalBaseURL = fullBaseURL.includes(":30008") ? fullBaseURL : `${fullBaseURL}:30008`;

const axiosInstance = axios.create({
  baseURL: finalBaseURL
});

export default axiosInstance;
