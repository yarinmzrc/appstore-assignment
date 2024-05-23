import { useLocalStorage } from "@/hooks/useLocalStorage";
import { createContext, useEffect, useState } from "react";
import { ThemeMode } from "@/types";

type Theme = "dark" | "light";
const { DARK, LIGHT } = ThemeMode;

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: DARK,
  setTheme: () => null,
};

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = DARK,
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [storedTheme, setStoredTheme] = useLocalStorage<Theme>(
    storageKey,
    defaultTheme
  );

  const [theme, setTheme] = useState<Theme>(storedTheme);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(LIGHT, DARK);

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      setStoredTheme(newTheme);
      setTheme(newTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
