import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL as string,
});

const api = {
  getTopFree: () => axiosInstance.get("/api/v2/us/apps/top-free/10/apps.json"),
  getTopPaid: () => axiosInstance.get("/api/v2/us/apps/top-paid/25/apps.json"),
};

export default api;
