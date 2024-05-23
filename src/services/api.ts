import { AppData } from "@/types";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL as string,
});

interface AllAppsResponse {
  freeResponse: Array<AppData>;
  paidResponse: Array<AppData>;
}

const api = {
  getTopFreeApps: async (): Promise<Array<AppData>> => {
    const response = await axiosInstance.get(
      "/api/v2/us/apps/top-free/10/apps.json"
    );

    if (response.status === 200) {
      return response.data.feed.results;
    }

    return [];
  },
  getTopPaidApps: async (): Promise<Array<AppData>> => {
    const response = await axiosInstance.get(
      "/api/v2/us/apps/top-paid/25/apps.json"
    );

    if (response.status === 200) {
      return response.data.feed.results;
    }

    return [];
  },
  getAllApps: async (): Promise<AllAppsResponse> => {
    const [freeResponse, paidResponse] = await Promise.all([
      axiosInstance.get("/api/v2/us/apps/top-free/10/apps.json"),
      axiosInstance.get("/api/v2/us/apps/top-paid/25/apps.json"),
    ]);

    if (freeResponse.status === 200 || paidResponse.status === 200) {
      return {
        freeResponse: freeResponse.data?.feed?.results || [],
        paidResponse: paidResponse.data?.feed?.results || [],
      };
    }

    return { freeResponse: [], paidResponse: [] };
  },
};

export default api;
