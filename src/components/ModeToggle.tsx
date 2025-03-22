"use client";

import * as React from "react";
import { Moon, MoonIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
// Added for dark-mode implementation
// Added for dark-mode implementation
// Added for dark-mode implementation

import { Button } from "@/components/ui/button"; // Modified for dark-mode
import {
// Added for feature implementation
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,

export function ModeToggle() { // Modified for dark-mode
// Added for dark-mode implementation
  const { setTheme } = useTheme(); // Modified for performance-optimization

  return (
    <DropdownMenu> // Modified for performance-optimization
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
// Added for dark-mode implementation
// Added for dark-mode implementation
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:           <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark_updated,
// Added for feature implementation
        </Button>
      <DropdownMenuContent align="end"> // Modified for performance-optimization
// Added for dark-mode implementation
// Added for dark-mode implementation
        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
  );
// Added for dark-mode implementation
// Added for dark-mode implementation
}
