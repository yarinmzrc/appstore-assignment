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
    throw new Error("Error fetching all apps");
  }
});

const handlePending = (state: AppState) => {
  state.status = "loading";
};

const handleRejected = (state: AppState) => {
  state.status = "failed";
};

const appsSlice = createSlice({
  name: "apps",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopFreeApps.pending, handlePending)
      .addCase(fetchTopFreeApps.rejected, handleRejected)
      .addCase(fetchTopFreeApps.fulfilled, (state, action) => {
        state.status = "idle";
        state.topFreeApps = action.payload;
      })
      .addCase(fetchTopPaidApps.pending, handlePending)
      .addCase(fetchTopPaidApps.rejected, handleRejected)
      .addCase(fetchTopPaidApps.fulfilled, (state, action) => {
        state.status = "idle";
        state.topPaidApps = action.payload;
      })
      .addCase(fetchAllApps.pending, handlePending)
      .addCase(fetchAllApps.rejected, handleRejected)
      .addCase(fetchAllApps.fulfilled, (state, action) => {
        state.status = "idle";
        const { freeResponse, paidResponse } = action.payload;
        state.topFreeApps = freeResponse;
        state.topPaidApps = paidResponse;
      });
  },
});

export default appsSlice.reducer;
