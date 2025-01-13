import axios from "axios";

const BASE_URL = window.env?.REACT_APP_API_URL || 'http://default-url';

if (!BASE_URL) {
  throw new Error("API base URL is not defined in the environment variables.");
}

const fullBaseURL = BASE_URL.startsWith("http://") || BASE_URL.startsWith("https://")
  ? BASE_URL : `http://${BASE_URL}`;

const finalBaseURL = fullBaseURL.includes(":4001") ? fullBaseURL : `${fullBaseURL}:4001`;

const axiosInstance = axios.create({
  baseURL: finalBaseURL
});

export default axiosInstance;
