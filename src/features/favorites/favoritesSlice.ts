import { AppData } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
  favoriteApps: Array<AppData>;
}

const initialState: FavoritesState = {
  favoriteApps: JSON.parse(localStorage.getItem("appstore_favorites") || "[]"),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<AppData>) => {
      state.favoriteApps = [...state.favoriteApps, action.payload];
      localStorage.setItem(
        "appstore_favorites",
        JSON.stringify(state.favoriteApps)
      );
    },
    removeFavorite: (state, action: PayloadAction<AppData>) => {
      state.favoriteApps = state.favoriteApps.filter(
        (app) => app.id !== action.payload.id
      );
      localStorage.setItem(
        "appstore_favorites",
        JSON.stringify(state.favoriteApps)
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
