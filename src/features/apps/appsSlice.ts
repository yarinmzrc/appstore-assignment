import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/api";
import { AppData } from "@/types";

interface AppState {
  topFreeApps: Array<AppData>;
  topPaidApps: Array<AppData>;
  status: "idle" | "loading" | "failed";
}

const initialState: AppState = {
  topFreeApps: [],
  topPaidApps: [],
  status: "idle",
};

export const fetchTopFreeApps = createAsyncThunk(
  "apps/fetchTopFreeApps",
  async () => {
    try {
      const results = await api.getTopFreeApps();
      return results;
    } catch (error) {
      throw new Error("Error fetching top free apps");
    }
  }
);

export const fetchTopPaidApps = createAsyncThunk(
  "apps/fetchTopPaidApps",
  async () => {
    try {
      const results = await api.getTopPaidApps();
      return results;
    } catch (error) {
      throw new Error("Error fetching top paid apps");
    }
  }
);

export const fetchAllApps = createAsyncThunk("apps/fetchAllApps", async () => {
  try {
    const results = await api.getAllApps();
    return results;
  } catch (error) {
    throw new Error("Error fetching top paid apps");
  }
});

const appsSlice = createSlice({
  name: "apps",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopFreeApps.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTopFreeApps.fulfilled, (state, action) => {
        state.status = "idle";
        state.topFreeApps = action.payload;
      })
      .addCase(fetchTopFreeApps.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchTopPaidApps.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTopPaidApps.fulfilled, (state, action) => {
        state.status = "idle";
        state.topPaidApps = action.payload;
      })
      .addCase(fetchTopPaidApps.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchAllApps.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllApps.fulfilled, (state, action) => {
        state.status = "idle";
        const { freeResponse, paidResponse } = action.payload;
        state.topPaidApps = paidResponse;
        state.topFreeApps = freeResponse;
      })
      .addCase(fetchAllApps.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default appsSlice.reducer;
