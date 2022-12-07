import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

type ThemeToggleProps = {
  width?: number;
  height?: number;
};

const ThemeToggle = ({ width = 20, height = 20 }: ThemeToggleProps) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) {
      return null;
    }
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          role="button"
          onClick={() => setTheme("light")}
          width={width}
          height={height}
        />
      );
    } else {
      return (
        <MoonIcon
          role="button"
          onClick={() => setTheme("dark")}
          width={width}
          height={height}
        />
      );
    }
  };
  return <div>{renderThemeChanger()}</div>;
};

export default ThemeToggle;
