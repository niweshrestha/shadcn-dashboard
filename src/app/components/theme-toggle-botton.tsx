'use client';

import { Button } from '@/components/ui/button';
import { Moon, SunDim } from 'lucide-react';
import { useTheme } from '../providers/ThemeProvider';

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Button
        onClick={toggleTheme}
        variant="ghost"
        className="max-w-full w-8 h-auto aspect-square p-0 inline-flex items-center justify-center"
      >
        {theme === 'dark' ? <SunDim size={12} /> : <Moon size={12} />}
      </Button>
    </>
  );
}
