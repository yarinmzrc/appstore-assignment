import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL as string,
});

const api = {
  getTopFreeApps: async () => {
    try {
      const response = await axiosInstance.get(
        "/api/v2/us/apps/top-free/10/apps.json"
      );
      return response?.data?.feed?.results || [];
    } catch (error) {
      console.error("Error fetching top free apps:", error);
      throw error;
    }
  },
  getTopPaidApps: async () => {
    try {
      const response = await axiosInstance.get(
        "/api/v2/us/apps/top-paid/25/apps.json"
      );
      return response?.data?.feed?.results || [];
    } catch (error) {
      console.error("Error fetching top paid apps:", error);
      throw error;
    }
  },
  getAllApps: async () => {
    try {
      const [freeResponse, paidResponse] = await Promise.all([
        api.getTopFreeApps(),
        api.getTopPaidApps(),
      ]);

      return {
        freeResponse,
        paidResponse,
      };
    } catch (error) {
      console.error("Error fetching apps:", error);
      throw error;
    }
  },
};

export default api;
