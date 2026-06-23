'use client';

import { AudioProvider } from './audio/AudioContext';
import { AudioToggle } from './components/AudioToggle';
import { ReactNode } from 'react';

export function RootLayoutClient({ children }: { children: ReactNode }) {
  return (
    <AudioProvider>
      {children}
      <AudioToggle />
    </AudioProvider>
  );
}
