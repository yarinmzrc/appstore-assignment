import { useTheme } from "@/hooks/useTheme";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { ThemeMode } from "@/types";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const { DARK, LIGHT } = ThemeMode;

  const isDarkMode = theme === DARK;

  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={isDarkMode}
        onCheckedChange={() => setTheme(isDarkMode ? LIGHT : DARK)}
        id="dark-mode"
      />
      <Label className="hidden md:block" htmlFor="dark-mode">
        {isDarkMode ? "Dark" : "Light"} Mode
      </Label>
    </div>
  );
}
