import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  if (!toggleTheme) return null;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 border-2 border-black dark:border-[#CCFF00] rounded-sm hover:bg-[#CCFF00] dark:hover:bg-[#CCFF00] dark:hover:text-black transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon size={20} className="text-black" />
      ) : (
        <Sun size={20} className="text-black" />
      )}
    </button>
  );
}
