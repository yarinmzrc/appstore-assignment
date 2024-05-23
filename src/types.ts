// interfaces
export interface AppData {
  name: string;
  artistName: string;
  artworkUrl100: string;
  id: string;
}

// enums

export enum Status {
  LOADING = "loading",
  FAILED = "failed",
  IDLE = "idle",
}

export enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
}
