'use client';

import {
  domAnimation,
  LazyMotion,
  MotionConfig as MotionProvider,
} from 'framer-motion';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import type { Dispatch, SetStateAction } from 'react';
import { createContext, useState } from 'react';

import useMounted from '@/hooks/use-mounted';

import { RenderIf } from './shared';
import { TooltipProvider } from './ui';

interface CommandPaletteContextProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const CommandPaletteContext = createContext<CommandPaletteContextProps>({
  isOpen: false,
  setIsOpen: () => {},
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  const mounted = useMounted();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <RenderIf isTrue={mounted}>
      <MotionProvider reducedMotion="user">
        <LazyMotion strict features={domAnimation}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SessionProvider>
              <CommandPaletteContext.Provider value={{ isOpen, setIsOpen }}>
                <TooltipProvider>{children}</TooltipProvider>
              </CommandPaletteContext.Provider>
            </SessionProvider>
          </ThemeProvider>
        </LazyMotion>
      </MotionProvider>
    </RenderIf>
  );
};

export default Providers;
