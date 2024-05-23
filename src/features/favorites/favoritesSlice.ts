import { RootState } from "@/store";
import { AppData } from "@/types";
import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";

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
    },
    removeFavorite: (state, action: PayloadAction<AppData>) => {
      state.favoriteApps = state.favoriteApps.filter(
        (app) => app.id !== action.payload.id
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;

const APPSTORE_FAVORITES = "appstore_favorites";

export const addFavoriteWithLocalStorage =
  (app: AppData) => (dispatch: Dispatch, getState: () => RootState) => {
    dispatch(addFavorite(app));
    const { favoriteApps } = getState().favorites;
    localStorage.setItem(APPSTORE_FAVORITES, JSON.stringify(favoriteApps));
  };

export const removeFavoriteWithLocalStorage =
  (app: AppData) => (dispatch: Dispatch, getState: () => RootState) => {
    dispatch(removeFavorite(app));
    const { favoriteApps } = getState().favorites;
    localStorage.setItem(APPSTORE_FAVORITES, JSON.stringify(favoriteApps));
  };
