"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { type FC, type ReactNode, useEffect } from "react";

// Syncs manual overrides back to "system" once the OS theme matches the chosen theme.
const ThemeWatcher: FC = () => {
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const onMediaChange = () => {
      const systemTheme = media.matches ? "dark" : "light";
      if (resolvedTheme === systemTheme) {
        setTheme("system");
      }
    };

    onMediaChange();
    media.addEventListener("change", onMediaChange);

    return () => {
      media.removeEventListener("change", onMediaChange);
    };
  }, [resolvedTheme, setTheme]);

  return null;
};

export const Providers: FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    disableTransitionOnChange
  >
    <ThemeWatcher />
    {children}
  </ThemeProvider>
);
