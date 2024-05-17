import { useTheme } from "@/components/theme-provider";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const isDarkMode = theme === "dark";

  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={isDarkMode}
        onCheckedChange={() => setTheme(isDarkMode ? "light" : "dark")}
        id="dark-mode"
      />
      <Label htmlFor="dark-mode">{isDarkMode ? "Dark" : "Light"} Mode</Label>
    </div>
  );
}
