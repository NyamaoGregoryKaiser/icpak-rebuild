"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(currentTheme === "dark" ? 24 : 0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setTranslateX(currentTheme === "dark" ? 24 : 0);
  }, [currentTheme]);

  if (!mounted) return null;

  const handleStart = (x) => {
    setIsDragging(true);
    setStartX(x);
  };

  const handleMove = (x) => {
    if (!isDragging) return;
    const deltaX = x - startX;
    const newTranslateX = Math.min(24, Math.max(0, translateX + deltaX));
    setTranslateX(newTranslateX);
  };

  const handleEnd = () => {
    setIsDragging(false);
    if (translateX >= 12) {
      setTheme("dark");
      setTranslateX(24);
    } else {
      setTheme("light");
      setTranslateX(0);
    }
  };

  return (
    <div className="flex items-center">
      <div
        className="relative w-12 h-6 border-2 border-black dark:border-white rounded-full bg-gray-300 dark:bg-gray-700 ml-2 cursor-pointer"
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
      >
        <span
          className="absolute left-0 top-0 bottom-0 w-6 h-5 bg-white dark:bg-gray-900 rounded-full transition-transform duration-150 ease-out"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {/* Icon inside the toggle */}
          {currentTheme === "dark" ? (
            <svg className="absolute right-1 top-1 w-4 h-3 hidden dark:block text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          ) : (
            <svg className="absolute left-1 top-1 w-4 h-3  text-yellow-500 dark:hidden " fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path>
            </svg>
          )}
        </span>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
