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
        className="text-red-300 bg-blue-600"
      />
      <Label htmlFor="dark-mode">{isDarkMode ? "Dark" : "Light"} Mode</Label>
    </div>
  );

  // return (
  //   <DropdownMenu>
  //     <DropdownMenuTrigger asChild>
  //       <Button variant="outline" size="icon">
  //         <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
  //         <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
  //         <span className="sr-only">Toggle theme</span>
  //       </Button>
  //     </DropdownMenuTrigger>
  //     <DropdownMenuContent align="end">
  //       <DropdownMenuItem onClick={() => setTheme("light")}>
  //         Light
  //       </DropdownMenuItem>
  //       <DropdownMenuItem onClick={() => setTheme("dark")}>
  //         Dark
  //       </DropdownMenuItem>
  //       <DropdownMenuItem onClick={() => setTheme("system")}>
  //         System
  //       </DropdownMenuItem>
  //     </DropdownMenuContent>
  //   </DropdownMenu>
  // );
}
